export default class UserInfo{
    constructor(userNameSelector, jobDescriptionSelector){
      this._nameElement = document.querySelector(userNameSelector);
      this._jobElement = document.querySelector(jobDescriptionSelector);
    }


getUserInfo() {
    return {
        name: nameElement.textContent,
        job: jobElement.textContent
    }
}
setUserInfo (user) {
    this._nameElement.textContent = user.name;
    this._jobElement.textContent = user.job;
}}