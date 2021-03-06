//global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';
const ME = '/me';

//users
const USERS = '/users';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';
const USER_DETAIL = '/:id';

//video

const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAILE = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const GIT = '/auth/github';
const GIT_CALLBACK = '/auth/github/callback';
const KAKAO = '/auth/kakao';
const KAKAO_CALLBACK = '/auth/kakao/callback';

const routes = {
  me: ME,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) return `/users/${id}`;
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) return `/videos/${id}`;
    return VIDEO_DETAILE;
  },
  editVideo: id => {
    if (id) return `/videos/${id}/edit`;
    return EDIT_VIDEO;
  },
  deleteVideo: id => {
    if (id) return `/videos/${id}/delete`;
    return DELETE_VIDEO;
  },
  github: GIT,
  githubCallback: GIT_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK
};

export default routes;
