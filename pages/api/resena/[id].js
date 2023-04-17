/** @format */
import { dbConect } from "utils/mongoose";
import Task from "models/Task";

dbConect();

export default async (req, res) => {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ msg: "task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(200).json({"error": error.message});
      }
    case "PUT":
      try {
        const task = await Task.findByIdAndUpdate(id, body, {
            new: true
        })
        if (!body)return res.status(404).json({ msg: "task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({"error": error.message});
        
      }

    case "DELETE":
      try {
        const deleteTask = await Task.findByIdAndDelete(id)
        if (!deleteTask) return res.status(404).json({ msg: "task not found" })
        return res.status(204).json()
      } catch (error) {
        return res.status(400).json({"error": error.message});
      }

    default:
      return res.status(400).json({ msg: "this method in not supported" });
  }

  return res.status(200).json("received");
};
