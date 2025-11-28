// src/api/authAPI.js
import api from "./api";

export const fetchMenu = () => api.get("menus");
