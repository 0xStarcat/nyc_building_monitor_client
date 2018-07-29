import { SIDEBAR_VIEW_BOUNDARY_LAYER_MENU } from '../Store/AppState/actions'

import {
  MOBILE_SIDEBAR_PREVIEW_Y_TRANSLATION,
  MOBILE_SIDEBAR_LARGE_PREVIEW_Y_TRANSLATION,
  MOBILE_SIDEBAR_XL_PREVIEW_Y_TRANSLATION,
  MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION,
  MOBILE_BUTTONS_LARGE_PREVIEW_Y_TRANSLATION,
  MOBILE_BUTTONS_XL_PREVIEW_Y_TRANSLATION
} from '../SharedStyles/__constants__/sidebarConstants'

export const getPreviewYTranslation = (sidebarView, buildingsPresent) => {
  switch (sidebarView) {
    case SIDEBAR_VIEW_BOUNDARY_LAYER_MENU:
      if (buildingsPresent) return MOBILE_SIDEBAR_XL_PREVIEW_Y_TRANSLATION
      else return MOBILE_SIDEBAR_LARGE_PREVIEW_Y_TRANSLATION
    default:
      return MOBILE_SIDEBAR_PREVIEW_Y_TRANSLATION
  }
}

export const getMobileButtonsYTranslation = (sidebarView, buildingsPresent) => {
  switch (sidebarView) {
    case SIDEBAR_VIEW_BOUNDARY_LAYER_MENU:
      if (buildingsPresent) return MOBILE_BUTTONS_XL_PREVIEW_Y_TRANSLATION
      else return MOBILE_BUTTONS_LARGE_PREVIEW_Y_TRANSLATION
    default:
      return MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION
  }
}
