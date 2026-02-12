import { User } from "../models/user-model.js";
import { Project } from "../models/project-model.js";
import { Task } from "../models/task-model.js";
import { subTask } from "../models/subtask-model.js";
import { apiResponse } from "../utils/api-response.js";
import { apiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { availableUserRole, userRolesEnum } from "../utils/constants.js";


const getTasks= asyncHandler(async (req, res) => {
    
})

const createTask= asyncHandler(async (req, res) => {
    
})

const getTaskById= asyncHandler(async (req, res) => {
    
})

const updateTask= asyncHandler(async (req, res) => {
    
})

const deleteTask= asyncHandler(async (req, res) => {
    
})

const createSubTask= asyncHandler(async (req, res) => {
    
})

const updateSubTask= asyncHandler(async (req, res) => {
    
})

const deleteSubTask= asyncHandler(async (req, res) => {
    
})

export {
    getTasks, createTask,getTaskById,updateTask,deleteTask,createSubTask,updateSubTask,deleteSubTask
}