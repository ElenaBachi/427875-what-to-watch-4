import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as user} from "./user/user.js";
import {reducer as filter} from "./filter/filter.js";
import {reducer as videoPlayer} from "./video-player/video-player.js";
import {reducer as filmsLoadBtn} from "./films-load-btn/films-load-btn.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.filter]: filter,
  [NameSpace.VIDEO_PLAYER]: videoPlayer,
  [NameSpace.FILMS_LOAD_BTN]: filmsLoadBtn,
});
