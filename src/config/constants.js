/*
 * ACTIONS
 */

// Auth
export const LOAD_USER_SUCCESS     = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE     = 'LOAD_USER_FAILURE'

// Notifications
export const GET_NOTIFICATIONS_PENDING = 'GET_NOTIFICATIONS_PENDING'
export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS'
export const GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE'
export const VISIT_NOTIFICATIONS = 'VISIT_NOTIFICATIONS'
export const SET_NOTIFICATIONS_FILTER_BY = 'SET_NOTIFICATIONS_FILTER_BY'
export const MARK_ALL_NOTIFICATIONS_READ = 'MARK_ALL_NOTIFICATIONS_READ'
export const TOGGLE_NOTIFICATION_READ = 'TOGGLE_NOTIFICATION_READ'
export const TOGGLE_NOTIFICATION_SEEN = 'TOGGLE_NOTIFICATION_SEEN'
export const VIEW_OLDER_NOTIFICATIONS_SUCCESS = 'VIEW_OLDER_NOTIFICATIONS_SUCCESS'
export const HIDE_OLDER_NOTIFICATIONS_SUCCESS = 'HIDE_OLDER_NOTIFICATIONS_SUCCESS'
export const NOTIFICATIONS_PENDING = 'NOTIFICATIONS_PENDING'
export const TOGGLE_NOTIFICATIONS_DROPDOWN_MOBILE = 'TOGGLE_NOTIFICATIONS_DROPDOWN_MOBILE'
export const TOGGLE_NOTIFICATIONS_DROPDOWN_WEB = 'TOGGLE_NOTIFICATIONS_DROPDOWN_WEB'

// Settings
export const CHECK_EMAIL_AVAILABILITY_PENDING = 'CHECK_EMAIL_AVAILABILITY_PENDING'
export const CHECK_EMAIL_AVAILABILITY_SUCCESS = 'CHECK_EMAIL_AVAILABILITY_SUCCESS'
export const CHECK_EMAIL_AVAILABILITY_FAILURE = 'CHECK_EMAIL_AVAILABILITY_FAILURE'

export const CHANGE_EMAIL_PENDING = 'CHANGE_EMAIL_PENDING'
export const CHANGE_EMAIL_SUCCESS = 'CHANGE_EMAIL_SUCCESS'
export const CHANGE_EMAIL_FAILURE = 'CHANGE_EMAIL_FAILURE'

export const CHANGE_PASSWORD_PENDING = 'CHANGE_PASSWORD_PENDING'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE'

export const GET_NOTIFICATION_SETTINGS_PENDING = 'GET_NOTIFICATION_SETTINGS_PENDING'
export const GET_NOTIFICATION_SETTINGS_SUCCESS = 'GET_NOTIFICATION_SETTINGS_SUCCESS'
export const GET_NOTIFICATION_SETTINGS_FAILURE = 'GET_NOTIFICATION_SETTINGS_FAILURE'
export const SAVE_NOTIFICATION_SETTINGS_PENDING = 'SAVE_NOTIFICATION_SETTINGS_PENDING'
export const SAVE_NOTIFICATION_SETTINGS_SUCCESS = 'SAVE_NOTIFICATION_SETTINGS_SUCCESS'
export const SAVE_NOTIFICATION_SETTINGS_FAILURE = 'SAVE_NOTIFICATION_SETTINGS_FAILURE'

// Search Term
export const SET_SEARCH_TERM   = 'SET_SEARCH_TERM'
export const SET_SEARCH_TAG    = 'SET_SEARCH_TAG'
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM'

// Project Search
export const CLEAR_PROJECT_SEARCH       = 'CLEAR_PROJECT_SEARCH'
export const PROJECT_SEARCH             = 'PROJECT_SEARCH'
export const PROJECT_SEARCH_FAILURE     = 'PROJECT_SEARCH_FAILURE'
export const PROJECT_SEARCH_SUCCESS     = 'PROJECT_SEARCH_SUCCESS'
export const PROJECT_SEARCH_PENDING     = 'PROJECT_SEARCH_PENDING'
export const LOAD_MORE_PROJECTS         = 'LOAD_MORE_PROJECTS'
export const GET_PROJECTS               = 'GET_PROJECTS'
export const GET_PROJECTS_PENDING       = 'GET_PROJECTS_PENDING'
export const GET_PROJECTS_SUCCESS       = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_FAILURE       = 'GET_PROJECTS_FAILURE'
export const SET_PROJECTS_SEARCH_CRITERIA = 'SET_PROJECTS_SEARCH_CRITERIA'
export const SET_PROJECTS_INFINITE_AUTOLOAD = 'SET_PROJECTS_INFINITE_AUTOLOAD'
export const SET_PROJECTS_LIST_VIEW = 'SET_PROJECTS_LIST_VIEW'


// Delete project
export const DELETE_PROJECT             = 'DELETE_PROJECT'
export const DELETE_PROJECT_PENDING     = 'DELETE_PROJECT_PENDING'
export const DELETE_PROJECT_SUCCESS     = 'DELETE_PROJECT_SUCCESS'
export const DELETE_PROJECT_FAILURE     = 'DELETE_PROJECT_FAILURE'

// Project Search Suggestions (Typeahead)
export const CLEAR_PROJECT_SUGGESTIONS_SEARCH   = 'CLEAR_PROJECT_SUGGESTIONS_SEARCH'
export const PROJECT_SUGGESTIONS_SEARCH_FAILURE     = 'PROJECT_SUGGESTIONS_SEARCH_FAILURE'
export const PROJECT_SUGGESTIONS_SEARCH_SUCCESS     = 'PROJECT_SUGGESTIONS_SEARCH_SUCCESS'

// Project Dashboard
export const LOAD_PROJECT_DASHBOARD             = 'LOAD_PROJECT_DASHBOARD'
export const LOAD_PROJECT_DASHBOARD_PENDING     = 'LOAD_PROJECT_DASHBOARD_PENDING'
export const LOAD_PROJECT_DASHBOARD_FAILURE     = 'LOAD_PROJECT_DASHBOARD_FAILURE'
export const LOAD_PROJECT_DASHBOARD_SUCCESS     = 'LOAD_PROJECT_DASHBOARD_SUCCESS'

// Direct Project Data
export const LOAD_DIRECT_PROJECT             = 'LOAD_DIRECT_PROJECT'
export const LOAD_DIRECT_PROJECT_PENDING     = 'LOAD_DIRECT_PROJECT_PENDING'
export const LOAD_DIRECT_PROJECT_FAILURE     = 'LOAD_DIRECT_PROJECT_FAILURE'
export const LOAD_DIRECT_PROJECT_SUCCESS     = 'LOAD_DIRECT_PROJECT_SUCCESS'

// Direct Project Data
export const LOAD_ADDITIONAL_PROJECT_DATA             = 'LOAD_ADDITIONAL_PROJECT_DATA'
export const LOAD_ADDITIONAL_PROJECT_DATA_PENDING     = 'LOAD_ADDITIONAL_PROJECT_DATA_PENDING'
export const LOAD_ADDITIONAL_PROJECT_DATA_FAILURE     = 'LOAD_ADDITIONAL_PROJECT_DATA_FAILURE'
export const LOAD_ADDITIONAL_PROJECT_DATA_SUCCESS     = 'LOAD_ADDITIONAL_PROJECT_DATA_SUCCESS'

// Project Topics Load
export const LOAD_PROJECT_FEEDS                = 'LOAD_PROJECT_FEEDS'
export const LOAD_PROJECT_FEEDS_PENDING        = 'LOAD_PROJECT_FEEDS_PENDING'
export const LOAD_PROJECT_FEEDS_FAILURE        = 'LOAD_PROJECT_FEEDS_FAILURE'
export const LOAD_PROJECT_FEEDS_SUCCESS        = 'LOAD_PROJECT_FEEDS_SUCCESS'

// Phase Topics Load
export const LOAD_PHASE_FEED                = 'LOAD_PHASE_FEED'
export const LOAD_PHASE_FEED_PENDING        = 'LOAD_PHASE_FEED_PENDING'
export const LOAD_PHASE_FEED_FAILURE        = 'LOAD_PHASE_FEED_FAILURE'
export const LOAD_PHASE_FEED_SUCCESS        = 'LOAD_PHASE_FEED_SUCCESS'

// project topics load with members
export const LOAD_PROJECT_FEEDS_MEMBERS              = 'LOAD_PROJECT_FEEDS_MEMBERS'
export const LOAD_PROJECT_FEEDS_MEMBERS_PENDING      = 'LOAD_PROJECT_FEEDS_MEMBERS_PENDING'
export const LOAD_PROJECT_FEEDS_MEMBERS_SUCCESS      = 'LOAD_PROJECT_FEEDS_MEMBERS_SUCCESS'
export const LOAD_PROJECT_FEEDS_MEMBERS_FAILURE      = 'LOAD_PROJECT_FEEDS_MEMBERS_FAILURE'

// phase topics load with members
export const LOAD_PHASE_FEED_MEMBERS              = 'LOAD_PHASE_FEED_MEMBERS'
export const LOAD_PHASE_FEED_MEMBERS_PENDING      = 'LOAD_PHASE_FEED_MEMBERS_PENDING'
export const LOAD_PHASE_FEED_MEMBERS_SUCCESS      = 'LOAD_PHASE_FEED_MEMBERS_SUCCESS'
export const LOAD_PHASE_FEED_MEMBERS_FAILURE      = 'LOAD_PHASE_FEED_MEMBERS_FAILURE'

// Create Project Topic
export const CREATE_PROJECT_FEED               = 'CREATE_PROJECT_FEED'
export const CREATE_PROJECT_FEED_PENDING       = 'CREATE_PROJECT_FEED_PENDING'
export const CREATE_PROJECT_FEED_SUCCESS       = 'CREATE_PROJECT_FEED_SUCCESS'
export const CREATE_PROJECT_FEED_FAILURE       = 'CREATE_PROJECT_FEED_FAILURE'

// Save Project Topic
export const SAVE_PROJECT_FEED          = 'SAVE_PROJECT_FEED'
export const SAVE_PROJECT_FEED_PENDING  = 'SAVE_PROJECT_FEED_PENDING'
export const SAVE_PROJECT_FEED_SUCCESS  = 'SAVE_PROJECT_FEED_SUCCESS'
export const SAVE_PROJECT_FEED_FAILURE  = 'SAVE_PROJECT_FEED_FAILURE'

// Delete Project Topic
export const DELETE_PROJECT_FEED          = 'DELETE_PROJECT_FEED'
export const DELETE_PROJECT_FEED_PENDING  = 'DELETE_PROJECT_FEED_PENDING'
export const DELETE_PROJECT_FEED_SUCCESS  = 'DELETE_PROJECT_FEED_SUCCESS'
export const DELETE_PROJECT_FEED_FAILURE  = 'DELETE_PROJECT_FEED_FAILURE'

export const LOAD_PROJECT_FEED_COMMENTS                   = 'LOAD_PROJECT_FEED_COMMENTS'
export const LOAD_PROJECT_FEED_COMMENTS_PENDING           = 'LOAD_PROJECT_FEED_COMMENTS_PENDING'
export const LOAD_PROJECT_FEED_COMMENTS_SUCCESS           = 'LOAD_PROJECT_FEED_COMMENTS_SUCCESS'
export const LOAD_PROJECT_FEED_COMMENTS_FAILURE           = 'LOAD_PROJECT_FEED_COMMENTS_FAILURE'

// Load Phase Comments
export const LOAD_PHASE_FEED_COMMENTS                   = 'LOAD_PHASE_FEED_COMMENTS'
export const LOAD_PHASE_FEED_COMMENTS_PENDING           = 'LOAD_PHASE_FEED_COMMENTS_PENDING'
export const LOAD_PHASE_FEED_COMMENTS_SUCCESS           = 'LOAD_PHASE_FEED_COMMENTS_SUCCESS'
export const LOAD_PHASE_FEED_COMMENTS_FAILURE           = 'LOAD_PHASE_FEED_COMMENTS_FAILURE'

// Create Topic Post
export const CREATE_PROJECT_FEED_COMMENT          = 'CREATE_PROJECT_FEED_COMMENT'
export const CREATE_PROJECT_FEED_COMMENT_PENDING  = 'CREATE_PROJECT_FEED_COMMENT_PENDING'
export const CREATE_PROJECT_FEED_COMMENT_SUCCESS  = 'CREATE_PROJECT_FEED_COMMENT_SUCCESS'
export const CREATE_PROJECT_FEED_COMMENT_FAILURE  = 'CREATE_PROJECT_FEED_COMMENT_FAILURE'

// Create Phase Post
export const CREATE_PHASE_FEED_COMMENT          = 'CREATE_PHASE_FEED_COMMENT'
export const CREATE_PHASE_FEED_COMMENT_PENDING  = 'CREATE_PHASE_FEED_COMMENT_PENDING'
export const CREATE_PHASE_FEED_COMMENT_SUCCESS  = 'CREATE_PHASE_FEED_COMMENT_SUCCESS'
export const CREATE_PHASE_FEED_COMMENT_FAILURE  = 'CREATE_PHASE_FEED_COMMENT_FAILURE'

// Save Topic Post
export const SAVE_PROJECT_FEED_COMMENT          = 'SAVE_PROJECT_FEED_COMMENT'
export const SAVE_PROJECT_FEED_COMMENT_PENDING  = 'SAVE_PROJECT_FEED_COMMENT_PENDING'
export const SAVE_PROJECT_FEED_COMMENT_SUCCESS  = 'SAVE_PROJECT_FEED_COMMENT_SUCCESS'
export const SAVE_PROJECT_FEED_COMMENT_FAILURE  = 'SAVE_PROJECT_FEED_COMMENT_FAILURE'

// Save Phase Post
export const SAVE_PHASE_FEED_COMMENT          = 'SAVE_PHASE_FEED_COMMENT'
export const SAVE_PHASE_FEED_COMMENT_PENDING  = 'SAVE_PHASE_FEED_COMMENT_PENDING'
export const SAVE_PHASE_FEED_COMMENT_SUCCESS  = 'SAVE_PHASE_FEED_COMMENT_SUCCESS'
export const SAVE_PHASE_FEED_COMMENT_FAILURE  = 'SAVE_PHASE_FEED_COMMENT_FAILURE'

// Get Topic Post
export const GET_PROJECT_FEED_COMMENT          = 'GET_PROJECT_FEED_COMMENT'
export const GET_PROJECT_FEED_COMMENT_PENDING  = 'GET_PROJECT_FEED_COMMENT_PENDING'
export const GET_PROJECT_FEED_COMMENT_SUCCESS  = 'GET_PROJECT_FEED_COMMENT_SUCCESS'
export const GET_PROJECT_FEED_COMMENT_FAILURE  = 'GET_PROJECT_FEED_COMMENT_FAILURE'

// Delete Topic Post
export const DELETE_PROJECT_FEED_COMMENT          = 'DELETE_PROJECT_FEED_COMMENT'
export const DELETE_PROJECT_FEED_COMMENT_PENDING  = 'DELETE_PROJECT_FEED_COMMENT_PENDING'
export const DELETE_PROJECT_FEED_COMMENT_SUCCESS  = 'DELETE_PROJECT_FEED_COMMENT_SUCCESS'
export const DELETE_PROJECT_FEED_COMMENT_FAILURE  = 'DELETE_PROJECT_FEED_COMMENT_FAILURE'

// Delete Phase Post
export const DELETE_PHASE_FEED_COMMENT          = 'DELETE_PHASE_FEED_COMMENT'
export const DELETE_PHASE_FEED_COMMENT_PENDING  = 'DELETE_PHASE_FEED_COMMENT_PENDING'
export const DELETE_PHASE_FEED_COMMENT_SUCCESS  = 'DELETE_PHASE_FEED_COMMENT_SUCCESS'
export const DELETE_PHASE_FEED_COMMENT_FAILURE  = 'DELETE_PHASE_FEED_COMMENT_FAILURE'

// Project Sort
export const PROJECT_SORT             = 'PROJECT_SORT'
export const PROJECT_SORT_FAILURE     = 'PROJECT_SORT_FAILURE'
export const PROJECT_SORT_SUCCESS     = 'PROJECT_SORT_SUCCESS'
export const PROJECT_SORT_PENDING     = 'PROJECT_SORT_PENDING'


// Project Load
export const LOAD_PROJECT             = 'LOAD_PROJECT'
export const LOAD_PROJECT_PENDING     = 'LOAD_PROJECT_PENDING'
export const LOAD_PROJECT_FAILURE     = 'LOAD_PROJECT_FAILURE'
export const LOAD_PROJECT_SUCCESS     = 'LOAD_PROJECT_SUCCESS'

export const CREATE_PROJECT           = 'CREATE_PROJECT'
export const CREATE_PROJECT_PENDING   = 'CREATE_PROJECT_PENDING'
export const CREATE_PROJECT_SUCCESS   = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_FAILURE   = 'CREATE_PROJECT_FAILURE'

export const CREATE_PROJECT_STAGE           = 'CREATE_PROJECT_STAGE'
export const CREATE_PROJECT_STAGE_PENDING   = 'CREATE_PROJECT_STAGE_PENDING'
export const CREATE_PROJECT_STAGE_SUCCESS   = 'CREATE_PROJECT_STAGE_SUCCESS'
export const CREATE_PROJECT_STAGE_FAILURE   = 'CREATE_PROJECT_STAGE_FAILURE'

export const UPDATE_PROJECT           = 'UPDATE_PROJECT'
export const UPDATE_PROJECT_PENDING   = 'UPDATE_PROJECT_PENDING'
export const UPDATE_PROJECT_SUCCESS   = 'UPDATE_PROJECT_SUCCESS'
export const UPDATE_PROJECT_FAILURE   = 'UPDATE_PROJECT_FAILURE'

export const UPDATE_PHASE             = 'UPDATE_PHASE'
export const UPDATE_PHASE_PENDING     = 'UPDATE_PHASE_PENDING'
export const UPDATE_PHASE_FAILURE     = 'UPDATE_PHASE_FAILURE'
export const UPDATE_PHASE_SUCCESS     = 'UPDATE_PHASE_SUCCESS'

export const DELETE_PROJECT_PHASE             = 'DELETE_PROJECT_PHASE'
export const DELETE_PROJECT_PHASE_PENDING     = 'DELETE_PROJECT_PHASE_PENDING'
export const DELETE_PROJECT_PHASE_FAILURE     = 'DELETE_PROJECT_PHASE_FAILURE'
export const DELETE_PROJECT_PHASE_SUCCESS     = 'DELETE_PROJECT_PHASE_SUCCESS'

export const UPDATE_PRODUCT           = 'UPDATE_PRODUCT'
export const UPDATE_PRODUCT_PENDING   = 'UPDATE_PRODUCT_PENDING'
export const UPDATE_PRODUCT_SUCCESS   = 'UPDATE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_FAILURE   = 'UPDATE_PRODUCT_FAILURE'

export const PROJECT_DIRTY            = 'PROJECT_DIRTY'
export const PROJECT_DIRTY_UNDO       = 'PROJECT_DIRTY_UNDO'

export const PRODUCT_DIRTY            = 'PRODUCT_DIRTY'
export const PRODUCT_DIRTY_UNDO       = 'PRODUCT_DIRTY_UNDO'

export const LOAD_PROJECT_PHASES             = 'LOAD_PROJECT_PHASES'
export const LOAD_PROJECT_PHASES_PENDING     = 'LOAD_PROJECT_PHASES_PENDING'
export const LOAD_PROJECT_PHASES_FAILURE     = 'LOAD_PROJECT_PHASES_FAILURE'
export const LOAD_PROJECT_PHASES_SUCCESS     = 'LOAD_PROJECT_PHASES_SUCCESS'

export const LOAD_PRODUCT_TIMELINE_WITH_MILESTONES             = 'LOAD_PRODUCT_TIMELINE_WITH_MILESTONES'
export const LOAD_PRODUCT_TIMELINE_WITH_MILESTONES_PENDING     = 'LOAD_PRODUCT_TIMELINE_WITH_MILESTONES_PENDING'
export const LOAD_PRODUCT_TIMELINE_WITH_MILESTONES_FAILURE     = 'LOAD_PRODUCT_TIMELINE_WITH_MILESTONES_FAILURE'
export const LOAD_PRODUCT_TIMELINE_WITH_MILESTONES_SUCCESS     = 'LOAD_PRODUCT_TIMELINE_WITH_MILESTONES_SUCCESS'

export const UPDATE_PRODUCT_MILESTONE             = 'UPDATE_PRODUCT_MILESTONE'
export const UPDATE_PRODUCT_MILESTONE_PENDING     = 'UPDATE_PRODUCT_MILESTONE_PENDING'
export const UPDATE_PRODUCT_MILESTONE_FAILURE     = 'UPDATE_PRODUCT_MILESTONE_FAILURE'
export const UPDATE_PRODUCT_MILESTONE_SUCCESS     = 'UPDATE_PRODUCT_MILESTONE_SUCCESS'

export const COMPLETE_PRODUCT_MILESTONE             = 'COMPLETE_PRODUCT_MILESTONE'
export const COMPLETE_PRODUCT_MILESTONE_PENDING     = 'COMPLETE_PRODUCT_MILESTONE_PENDING'
export const COMPLETE_PRODUCT_MILESTONE_FAILURE     = 'COMPLETE_PRODUCT_MILESTONE_FAILURE'
export const COMPLETE_PRODUCT_MILESTONE_SUCCESS     = 'COMPLETE_PRODUCT_MILESTONE_SUCCESS'

export const LOAD_MEMBERS             = 'LOAD_MEMBERS'
export const LOAD_MEMBERS_PENDING     = 'LOAD_MEMBERS_PENDING'
export const LOAD_MEMBERS_SUCCESS     = 'LOAD_MEMBERS_SUCCESS'
export const LOAD_MEMBERS_FAILURE     = 'LOAD_MEMBERS_FAILURE'

export const LOAD_MEMBER_SUGGESTIONS             = 'LOAD_MEMBER_SUGGESTIONS'
export const LOAD_MEMBER_SUGGESTIONS_PENDING     = 'LOAD_MEMBER_SUGGESTIONS_PENDING'
export const LOAD_MEMBER_SUGGESTIONS_SUCCESS     = 'LOAD_MEMBER_SUGGESTIONS_SUCCESS'
export const LOAD_MEMBER_SUGGESTIONS_FAILURE     = 'LOAD_MEMBER_SUGGESTIONS_FAILURE'

export const ADD_PROJECT_MEMBER             = 'ADD_PROJECT_MEMBER'
export const ADD_PROJECT_MEMBER_PENDING     = 'ADD_PROJECT_MEMBER_PENDING'
export const ADD_PROJECT_MEMBER_SUCCESS     = 'ADD_PROJECT_MEMBER_SUCCESS'
export const ADD_PROJECT_MEMBER_FAILURE     = 'ADD_PROJECT_MEMBER_FAILURE'

export const REMOVE_PROJECT_MEMBER             = 'REMOVE_PROJECT_MEMBER'
export const REMOVE_PROJECT_MEMBER_PENDING     = 'REMOVE_PROJECT_MEMBER_PENDING'
export const REMOVE_PROJECT_MEMBER_SUCCESS     = 'REMOVE_PROJECT_MEMBER_SUCCESS'
export const REMOVE_PROJECT_MEMBER_FAILURE     = 'REMOVE_PROJECT_MEMBER_FAILURE'

export const UPDATE_PROJECT_MEMBER             = 'UPDATE_PROJECT_MEMBER'
export const UPDATE_PROJECT_MEMBER_PENDING     = 'UPDATE_PROJECT_MEMBER_PENDING'
export const UPDATE_PROJECT_MEMBER_SUCCESS     = 'UPDATE_PROJECT_MEMBER_SUCCESS'
export const UPDATE_PROJECT_MEMBER_FAILURE     = 'UPDATE_PROJECT_MEMBER_FAILURE'

export const CLEAR_LOADED_PROJECT     = 'CLEAR_LOADED_PROJECT'


// Project attachments
export const ADD_PROJECT_ATTACHMENT         = 'ADD_PROJECT_ATTACHMENT'
export const ADD_PROJECT_ATTACHMENT_PENDING = 'ADD_PROJECT_ATTACHMENT_PENDING'
export const ADD_PROJECT_ATTACHMENT_SUCCESS = 'ADD_PROJECT_ATTACHMENT_SUCCESS'
export const ADD_PROJECT_ATTACHMENT_FAILURE = 'ADD_PROJECT_ATTACHMENT_FAILURE'

export const REMOVE_PROJECT_ATTACHMENT         = 'REMOVE_PROJECT_ATTACHMENT'
export const REMOVE_PROJECT_ATTACHMENT_PENDING = 'REMOVE_PROJECT_ATTACHMENT_PENDING'
export const REMOVE_PROJECT_ATTACHMENT_SUCCESS = 'REMOVE_PROJECT_ATTACHMENT_SUCCESS'
export const REMOVE_PROJECT_ATTACHMENT_FAILURE = 'REMOVE_PROJECT_ATTACHMENT_FAILURE'

export const UPDATE_PROJECT_ATTACHMENT         = 'UPDATE_PROJECT_ATTACHMENT'
export const UPDATE_PROJECT_ATTACHMENT_PENDING = 'UPDATE_PROJECT_ATTACHMENT_PENDING'
export const UPDATE_PROJECT_ATTACHMENT_SUCCESS = 'UPDATE_PROJECT_ATTACHMENT_SUCCESS'
export const UPDATE_PROJECT_ATTACHMENT_FAILURE = 'UPDATE_PROJECT_ATTACHMENT_FAILURE'

// Product attachments
export const ADD_PRODUCT_ATTACHMENT         = 'ADD_PRODUCT_ATTACHMENT'
export const ADD_PRODUCT_ATTACHMENT_PENDING = 'ADD_PRODUCT_ATTACHMENT_PENDING'
export const ADD_PRODUCT_ATTACHMENT_SUCCESS = 'ADD_PRODUCT_ATTACHMENT_SUCCESS'
export const ADD_PRODUCT_ATTACHMENT_FAILURE = 'ADD_PRODUCT_ATTACHMENT_FAILURE'

export const REMOVE_PRODUCT_ATTACHMENT         = 'REMOVE_PRODUCT_ATTACHMENT'
export const REMOVE_PRODUCT_ATTACHMENT_PENDING = 'REMOVE_PRODUCT_ATTACHMENT_PENDING'
export const REMOVE_PRODUCT_ATTACHMENT_SUCCESS = 'REMOVE_PRODUCT_ATTACHMENT_SUCCESS'
export const REMOVE_PRODUCT_ATTACHMENT_FAILURE = 'REMOVE_PRODUCT_ATTACHMENT_FAILURE'

export const UPDATE_PRODUCT_ATTACHMENT         = 'UPDATE_PRODUCT_ATTACHMENT'
export const UPDATE_PRODUCT_ATTACHMENT_PENDING = 'UPDATE_PRODUCT_ATTACHMENT_PENDING'
export const UPDATE_PRODUCT_ATTACHMENT_SUCCESS = 'UPDATE_PRODUCT_ATTACHMENT_SUCCESS'
export const UPDATE_PRODUCT_ATTACHMENT_FAILURE = 'UPDATE_PRODUCT_ATTACHMENT_FAILURE'

// Templates

// load all templates to `templates.projectTemplate` in store
export const LOAD_PROJECT_TEMPLATES             = 'LOAD_PROJECT_TEMPLATES'
export const LOAD_PROJECT_TEMPLATES_PENDING     = 'LOAD_PROJECT_TEMPLATES_PENDING'
export const LOAD_PROJECT_TEMPLATES_SUCCESS     = 'LOAD_PROJECT_TEMPLATES_SUCCESS'
export const LOAD_PROJECT_TEMPLATES_FAILURE     = 'LOAD_PROJECT_TEMPLATES_FAILURE'

// load project template for particular project to `projectState.projectTemplate` in store
export const LOAD_PROJECT_TEMPLATE             = 'LOAD_PROJECT_TEMPLATE'
export const LOAD_PROJECT_TEMPLATE_PENDING     = 'LOAD_PROJECT_TEMPLATE_PENDING'
export const LOAD_PROJECT_TEMPLATE_SUCCESS     = 'LOAD_PROJECT_TEMPLATE_SUCCESS'
export const LOAD_PROJECT_TEMPLATE_FAILURE     = 'LOAD_PROJECT_TEMPLATE_FAILURE'

// load product templates for particular project to `projectState.productTemplate` in store
export const LOAD_PROJECT_PRODUCT_TEMPLATES             = 'LOAD_PROJECT_PRODUCT_TEMPLATES'
export const LOAD_PROJECT_PRODUCT_TEMPLATES_PENDING     = 'LOAD_PROJECT_PRODUCT_TEMPLATES_PENDING'
export const LOAD_PROJECT_PRODUCT_TEMPLATES_SUCCESS     = 'LOAD_PROJECT_PRODUCT_TEMPLATES_SUCCESS'
export const LOAD_PROJECT_PRODUCT_TEMPLATES_FAILURE     = 'LOAD_PROJECT_PRODUCT_TEMPLATES_FAILURE'

// load all product templates to `projectState.allProductTemplate` in store
export const LOAD_ALL_PRODUCT_TEMPLATES             = 'LOAD_ALL_PRODUCT_TEMPLATES'
export const LOAD_ALL_PRODUCT_TEMPLATES_PENDING     = 'LOAD_ALL_PRODUCT_TEMPLATES_PENDING'
export const LOAD_ALL_PRODUCT_TEMPLATES_SUCCESS     = 'LOAD_ALL_PRODUCT_TEMPLATES_SUCCESS'
export const LOAD_ALL_PRODUCT_TEMPLATES_FAILURE     = 'LOAD_ALL_PRODUCT_TEMPLATES_FAILURE'

// load all project types to `template.projectCategories` in store
export const LOAD_PROJECT_CATEGORIES             = 'LOAD_PROJECT_CATEGORIES'
export const LOAD_PROJECT_CATEGORIES_PENDING     = 'LOAD_PROJECT_CATEGORIES_PENDING'
export const LOAD_PROJECT_CATEGORIES_SUCCESS     = 'LOAD_PROJECT_CATEGORIES_SUCCESS'
export const LOAD_PROJECT_CATEGORIES_FAILURE     = 'LOAD_PROJECT_CATEGORIES_FAILURE'

export const THREAD_MESSAGES_PAGE_SIZE = 3
/*
 * Project status
 */
export const PROJECT_STATUS_DRAFT = 'draft'
export const PROJECT_STATUS_IN_REVIEW = 'in_review'
export const PROJECT_STATUS_REVIEWED = 'reviewed'
export const PROJECT_STATUS_ACTIVE = 'active'
export const PROJECT_STATUS_COMPLETED = 'completed'
export const PROJECT_STATUS_CANCELLED = 'cancelled'
export const PROJECT_STATUS_PAUSED = 'paused'


export const PHASE_STATUS_DRAFT = 'draft'
export const PHASE_STATUS_IN_REVIEW = 'in_review'
export const PHASE_STATUS_REVIEWED = 'reviewed'
export const PHASE_STATUS_ACTIVE = 'active'
export const PHASE_STATUS_COMPLETED = 'completed'
export const PHASE_STATUS_CANCELLED = 'cancelled'
export const PHASE_STATUS_PAUSED = 'paused'

export const PROJECT_STATUS = [
  {color: 'gray', name: 'Draft', fullName: 'Project is in draft', value: PROJECT_STATUS_DRAFT, order: 2, dropDownOrder: 1 },
  {color: 'gray', name: 'In review', fullName: 'Project is in review', value: PROJECT_STATUS_IN_REVIEW, order: 3, dropDownOrder: 2 },
  {color: 'gray', name: 'Reviewed', fullName: 'Project is reviewed', value: PROJECT_STATUS_REVIEWED, order: 4, dropDownOrder: 3 },
  {color: 'green', name: 'Active', fullName: 'Project is active', value: PROJECT_STATUS_ACTIVE, order: 1, dropDownOrder: 4 },
  {color: 'black', name: 'Completed', fullName: 'Project is completed', value: PROJECT_STATUS_COMPLETED, order: 5, dropDownOrder: 5 },
  {color: 'black', name: 'Cancelled', fullName: 'Project is canceled', value: PROJECT_STATUS_CANCELLED, order: 6, dropDownOrder: 6 },
  {color: 'red', name: 'Paused', fullName: 'Project is paused', value: PROJECT_STATUS_PAUSED, order: 7, dropDownOrder: 7 }
]

export const PHASE_STATUS = [
  {color: 'gray', name: 'Draft', fullName: 'Phase is in draft', value: PHASE_STATUS_DRAFT, order: 2, dropDownOrder: 1 },
  // {color: 'gray', name: 'In review', fullName: 'Phase is in review', value: PHASE_STATUS_IN_REVIEW, order: 3, dropDownOrder: 2 },
  {color: 'gray', name: 'Planned', fullName: 'Phase is reviewed', value: PHASE_STATUS_REVIEWED, order: 4, dropDownOrder: 3 },
  {color: 'green', name: 'In Progress', fullName: 'Phase is active', value: PHASE_STATUS_ACTIVE, order: 1, dropDownOrder: 4 },
  {color: 'black', name: 'Delivered', fullName: 'Phase is completed', value: PHASE_STATUS_COMPLETED, order: 5, dropDownOrder: 5 },
  // {color: 'black', name: 'Cancelled', fullName: 'Phase is canceled', value: PHASE_STATUS_CANCELLED, order: 6, dropDownOrder: 6 },
  // {color: 'red', name: 'Paused', fullName: 'Phase is paused', value: PHASE_STATUS_PAUSED, order: 7, dropDownOrder: 7 }
]

// this defines default criteria to filter projects for projects list
export const PROJECT_LIST_DEFAULT_CRITERIA = {
  sort: 'updatedAt desc'
}

export const NOTIFICATION_TYPE = {
  WARNING: 'warning',
  NEW_PROJECT: 'new-project',
  UPDATES: 'updates',
  NEW_POSTS: 'new-posts',
  REVIEW_PENDING: 'review-pending',
  MEMBER_ADDED: 'member-added'
}

// projects list view types
export const PROJECTS_LIST_VIEW = {
  GRID: 'grid',
  CARD: 'card'
}

/*
 * Project member role
 */
export const PROJECT_ROLE_COPILOT = 'copilot'
export const PROJECT_ROLE_MANAGER = 'manager'
export const PROJECT_ROLE_CUSTOMER = 'customer'
export const PROJECT_ROLE_OWNER = 'owner'
export const PROJECT_ROLE_MEMBER = 'member' // this is need for notifications

/*
 * Events
 */
export const EVENT_ROUTE_CHANGE = 'event.route_change'

/*
 * User Roles
 */
export const ROLE_TOPCODER_USER = 'Topcoder User'
export const ROLE_CONNECT_COPILOT = 'Connect Copilot'
export const ROLE_CONNECT_MANAGER = 'Connect Manager'
export const ROLE_CONNECT_ADMIN = 'Connect Admin'
export const ROLE_ADMINISTRATOR = 'administrator'

// FIXME .. remove defaults
export const FILE_PICKER_API_KEY = process.env.FILE_PICKER_API_KEY || 'AzFINuQoqTmqw0QEoaw9az'
export const FILE_PICKER_SUBMISSION_CONTAINER_NAME = process.env.FILE_PICKER_SUBMISSION_CONTAINER_NAME || 'submission-staging-dev'
export const PROJECT_ATTACHMENTS_FOLDER = process.env.PROJECT_ATTACHMENTS_FOLDER || 'PROJECT_ATTACHMENTS'

export const SEGMENT_KEY = process.env.CONNECT_SEGMENT_KEY
/*
 * URLs
 */
export const DOMAIN = process.env.domain || 'topcoder.com'
export const CONNECT_DOMAIN = `connect.${DOMAIN}`
export const ACCOUNTS_APP_CONNECTOR_URL = process.env.ACCOUNTS_APP_CONNECTOR_URL
export const ACCOUNTS_APP_LOGIN_URL = process.env.ACCOUNTS_APP_LOGIN_URL || `https://accounts.${DOMAIN}/#!/connect`
export const ACCOUNTS_APP_REGISTER_URL = process.env.ACCOUNTS_APP_REGISTER_URL || `https://accounts.${DOMAIN}/#!/connect/registration`

export const TC_API_URL = `https://api.${DOMAIN}`
export const DIRECT_PROJECT_URL = `https://www.${DOMAIN}/direct/projectOverview?formData.projectId=`
export const SALESFORCE_PROJECT_LEAD_LINK = process.env.SALESFORCE_PROJECT_LEAD_LINK
export const TC_NOTIFICATION_URL = process.env.TC_NOTIFICATION_URL || `${TC_API_URL}/v5/notifications`

export const TC_CDN_URL = process.env.NODE_ENV === 'development' ? 'https://d1aahxkjiobka8.cloudfront.net' : 'https://d2nl5eqipnb33q.cloudfront.net'

export const PROJECT_NAME_MAX_LENGTH = 255
export const PROJECT_REF_CODE_MAX_LENGTH = 32

export const PROJECT_FEED_TYPE_PRIMARY  = 'PRIMARY'
export const PROJECT_FEED_TYPE_MESSAGES = 'MESSAGES'
export const PROJECT_FEED_TYPE_PHASE = 'PHASE'

export const DISCOURSE_BOT_USERID = 'system'
export const CODER_BOT_USERID = 'CoderBot'
export const TC_SYSTEM_USERID = parseInt(process.env.TC_SYSTEM_USERID || '0', 10)
export const CODER_BOT_USER_FNAME = 'Coder'
export const CODER_BOT_USER_LNAME = 'the Bot'

export const PROJECT_MAX_COLORS = 5

export const AUTOCOMPLETE_TRIGGER_LENGTH = 3

// Toggle this flag to enable/disable maintenance mode
export const MAINTENANCE_MODE = false

export const LS_INCOMPLETE_PROJECT = 'incompleteProject'


export const PROJECTS_API_URL = process.env.PROJECTS_API_URL || TC_API_URL
export const CONNECT_MESSAGE_API_URL = process.env.CONNECT_MESSAGE_API_URL || TC_API_URL

export const NEW_PROJECT_PATH = '/new-project'

// Analytics constants
export const GA_CLICK_ID  = '_gclid'
export const GA_CLIENT_ID = '_gacid'

// ToolTip
export const TOOLTIP_DEFAULT_DELAY = 300 // in ms


// Projects list
export const PROJECTS_LIST_PER_PAGE = 20

/*eslint-disable camelcase */
//Project type to icon name mapping
export const PROJECT_ICON_MAP = {
  app: 'product-cat-app',
  application_development: 'product-app-app',
  website: 'product-cat-website',
  website_development: 'product-website-website',
  chatbot: 'product-cat-chatbot',
  watson_chatbot: 'product-chatbot-watson',
  generic_chatbot: 'product-chatbot-chatbot',
  visual_design: 'product-cat-design',
  wireframes: 'product-design-wireframes',
  visual_design_concepts: 'product-design-app-visual',
  visual_design_prod: 'product-design-app-visual',
  infographic: 'product-design-infographic',
  generic_design: 'product-design-other',
  app_dev: 'product-cat-development',
  visual_prototype: 'product-dev-prototype',
  frontend_dev: 'product-dev-front-end-dev',
  api_dev: 'product-dev-integration',
  generic_dev: 'product-dev-other',
  quality_assurance: 'product-cat-qa',
  real_world_testing: 'product-qa-crowd-testing',
  mobility_testing: 'product-qa-mobility-testing',
  performance_testing: 'product-qa-website-performance',
  digital_accessability: 'product-qa-digital-accessability',
  open_source_automation: 'product-qa-os-automation',
  consulting_adivisory: 'product-qa-consulting'
}
/*eslint-enable */
//Project sort options
export const SORT_OPTIONS = [
  { val: 'updatedAt desc', field: 'updatedAt' },
  { val: 'createdAt', field: 'createdAt' },
  { val: 'createdAt desc', field: 'createdAt' }
]

// Notifications
export const REFRESH_NOTIFICATIONS_INTERVAL = 1000 * 60 * 1 // 1 minute interval
export const REFRESH_UNREAD_UPDATE_INTERVAL = 1000 * 10 * 1 // 10 second interval
export const NOTIFICATIONS_DROPDOWN_PER_SOURCE = 5
export const NOTIFICATIONS_NEW_PER_SOURCE = 10

export const NOTIFICATIONS_LIMIT = 1000

export const SCROLL_TO_MARGIN = 70 // px - 60px of toolbar height + 10px to make some margin
export const SCROLL_TO_DURATION = 500 // ms

// Settings
export const MAX_USERNAME_LENGTH = 15
export const EMAIL_AVAILABILITY_CHECK_DEBOUNCE = 300 /* in ms */
export const PASSWORD_MIN_LENGTH = 8
export const PASSWORD_REG_EXP = /^(?=.*[a-z])(?=.*[^a-z]).+$/i

// Screen breakpoints
export const SCREEN_BREAKPOINT_LG = 1360
export const SCREEN_BREAKPOINT_RG = 992
export const SCREEN_BREAKPOINT_MD = 768
export const SCREEN_BREAKPOINT_SM = 640
export const SCREEN_BREAKPOINT_XS = 320

export const NOTIFICATION_SETTINGS_PERIODS = [
  { text: 'Send as they happen', value: 'immediately' },
  { text: 'Every 10m.', value: 'every10minutes' },
  { text: 'Hourly', value: 'hourly' },
  { text: 'Daily', value: 'daily' },
  { text: 'Weekly', value: 'weekly' },
]

// date time formats
export const POST_TIME_FORMAT = 'h:mm a'

// max time difference between consecutive posts to bundle posts by same user
export const POSTS_BUNDLE_TIME_DIFF = 1000 * 60 * 10 // 10 min difference

// possible statuses of milestones
export const MILESTONE_STATUS = {
  PLANNED: 'planned',
  ACTIVE: 'active',
  BLOCKED: 'blocked',
  COMPLETED: 'completed',
}

// minimum designs to select during checkpoint type milestone
export const MIN_CHECKPOINT_REVIEW_DESIGNS = 5
