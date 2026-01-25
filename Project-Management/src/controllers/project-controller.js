import { User } from "../models/user-model.js";
import { Project } from "../models/project-model.js";
import { ProjectMember } from "../models/projectMember-model.js"
import { apiResponse } from "../utils/api-response.js";
import { apiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

const getProjects = asyncHandler(async (req,res) => {

})

const getProjectById = asyncHandler(async(req,res) => {

})

const createProject = asyncHandler(async(req,res) => {
    
})

const updateProject = asyncHandler(async(req,res) => {
    
})

const deleteProject = asyncHandler(async(req,res) => {
    
})

const addMembersToProject = asyncHandler(async(req,res) => {
    
})

const getProjectMembers = asyncHandler(async(req,res) => {
    
})

const updateMemberRole = asyncHandler(async(req,res) => {
    
})

const deleteMember = asyncHandler(async(req,res) => {
    
})

export {getProjects, getProjectById, createProject, updateProject, deleteProject, addMembersToProject, getProjectMembers, updateMemberRole, deleteMember}