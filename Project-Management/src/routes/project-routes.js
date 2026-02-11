import { Router } from "express";
import { getProjects, getProjectById, createProject, updateProject, deleteProject, addMembersToProject, getProjectMembers, updateMemberRole, deleteMember} from "../controllers/project-controller.js";
import { validate } from "../middlewares/validator-middleware.js";
import { verifyJWT, validateProjectPermission } from "../middlewares/auth-middleware.js";
import { createProjectValidator , addMemberstoProjectValidator} from "../validators/index.js";
import { availableUserRole, userRolesEnum } from "../utils/constants.js";

const router = Router();
router.use(verifyJWT)            //This will help to apply jwt on every line after it

router
    .route("/")
    .get(getProjects)
    .post(createProjectValidator(), validate, createProject)

router
    .route("/:projectId")
    .get(validateProjectPermission(availableUserRole),getProjectById)
    .put(validateProjectPermission([userRolesEnum.ADMIN]), createProjectValidator(), validate,updateProject)
    .delete(validateProjectPermission([userRolesEnum.ADMIN]),deleteProject)

router
    .route("/:projectId/members")
    .get(getProjectMembers)
    .post(validateProjectPermission([userRolesEnum.ADMIN]),addMemberstoProjectValidator(),validate,addMembersToProject)

router
    .route("/:projectId/members/:userId")
    .put(validateProjectPermission([userRolesEnum.ADMIN]),updateMemberRole)
    .delete(validateProjectPermission([userRolesEnum.ADMIN]),deleteMember)


export { router }