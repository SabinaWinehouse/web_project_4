
export default class UserInfo {
    constructor(userNameSelector, jobDescriptionSelector) {
      this._nameElement = document.querySelector(userNameSelector);
      this._jobElement = document.querySelector(jobDescriptionSelector);
      this._nameInput = document.querySelector('.popup__form-name');
      this._jobInput = document.querySelector('.popup__form-subtitle');
    }
  
    getUserInfo() {
      return {
        name: this._nameElement.textContent,
        job: this._jobElement.textContent
      }
    }
  
    setUserInfo(user) {
      this._nameElement.textContent = user.name;
      this._jobElement.textContent = user.job;
    }
  
    prefillForm() {
      const {name, job} = this.getUserInfo();
  
      this._nameInput.value = name;
      this._jobInput.value = job;
    }
  }