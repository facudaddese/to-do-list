import { useState } from "react";

export const useEdit = () => {
  const [editName, setEditName] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  return { editName, setEditName, editId, setEditId };
};
