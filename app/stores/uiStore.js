import { observable, action, computed } from 'mobx';

export class UiStore {

  @observable isMobXWorking = true;

}

export default new UiStore();
