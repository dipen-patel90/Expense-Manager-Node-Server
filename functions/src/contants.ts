// Master Data Table
export class MasterData {
  // table name
  static readonly MASTER_DATA = "master_data";

  // field names
  static readonly ALLOCATION_TYPES = "allocation_types";
  static readonly DESIGNATION_TYPES = "designation_types";
  static readonly PROJECT_SCOPE_TYPES = "project_scope_types";
  static readonly PROJECT_STATES = "project_states";
  static readonly TECHNOLOGIES = "technologies";
  static readonly URL_TYPES = "url_types";
  static readonly USER_ROLE_TYPES = "user_role_types";
  static readonly CLIENTS = "clients";
}

// App-User Table
export class Resources {
  // table name
  static readonly RESOURCES = "resources";

  // field names
  static readonly EMAIL = "email";
  static readonly PASSWORD = "password";
}

// Login-Token Table
export class LoginTokens {
  // table name
  static readonly LOGIN_TOKENS = "login_tokens";

  // field names
  // static readonly ID = "id";
  static readonly USERNAME = "username";
  static readonly TOKEN = "token";
  static readonly LAST_LOGIN_TIMESTAMP = "last_login_timestamp";

  // Token validity in days
  static readonly TOKEN_VALIDATY_DAYS = 2;
}

// project_information Table
export class Projects {
  // table name
  static readonly PROJECTS = "projects";

  // field names
  // static readonly ID = "id";
  static readonly PROJECT_NAME = "project_name";
  static readonly PROJECT_RESOURCES = "project_resources";
}

// project_information Table
export class ProjectResources {
  // table name
  static readonly PROJECT_RESOURCES = "project_resources";

  // field names
  // static readonly ID = "id";
  static readonly RESOURCE_ID = "resource_id";
  static readonly DESIGNATION_ID = "designation_id";
  static readonly PROJECT_ID = "project_id";
}

// sub_projects Table
export class SubProjects {
  // table name
  static readonly SUB_PROJECTS = "sub_projects";

  static readonly PROJECT_ID = "project_id";
  static readonly PROJECT_SCOPE_ID = "project_scope_id";
  static readonly SUB_PROJECT_RESOURCES = "sub_project_resources";
}

// sub_project_resources Table
export class SubProjectResources {
  // table name
  static readonly SUB_PROJECT_RESOURCES = "sub_project_resources";

  // field names
  // static readonly ID = "id";
  static readonly RESOURCE_ID = "resource_id";
  static readonly DESIGNATION_ID = "designation_id";
  static readonly SUB_PROJECT_ID = "sub_project_id";
}
