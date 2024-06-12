import { createAction, props } from '@ngrx/store';
import { IBlog, IBlogListFilterParams } from '../../services/backend';

const prefix = '[Blog List]';

export const getBlogList = createAction(
  `${prefix} Get blog list`,
  props<{ payload: IBlogListFilterParams }>()
);
export const getBlogListSuccess = createAction(
  `${prefix} Get blog list success`,
  props<{ payload: IBlog[] }>()
);
export const getBlogListFailure = createAction(
  `${prefix} Get blog list failure`
);

export const getBlogDetail = createAction(
  `${prefix} Get blog detail`,
  props<{ payload: string }>()
);
export const getBlogDetailSuccess = createAction(
  `${prefix} Get blog detail success`,
  props<{ payload: IBlog }>()
);
export const getBlogDetailFailure = createAction(
  `${prefix} Get blog detail failure`
);

export const cancelEntry = createAction(`${prefix} Cancel Entry`);
