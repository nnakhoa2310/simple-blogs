import { EntityState } from '@ngrx/entity';
import { IBlog } from '../../services/backend';
import * as actions from './blog-list.actions';
import { IFilterAndSort, IPagination } from './blog-list.modal';

export interface State {
    blogList: EntityState<IBlog>;
    loading: boolean;
    filterAndSort: IFilterAndSort;
    pagination: IPagination;
  }