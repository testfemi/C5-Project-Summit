import LoginPage from './LoginPage';
import HomePage from './HomePage';
import JobSearchModalPage from './JobSearchModalPage';
import JobserveGenericPage from './JobserveGenericPage';

class PageManager {
    constructor() {
        this.loginPage = new LoginPage();
        this.homePage = new HomePage();
        this.jobSearchModalPage = new JobSearchModalPage();
        this.jobserveGenericPage = new JobserveGenericPage();
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getJobSearchModalPage() {
        return this.jobSearchModalPage;
    }
    getJobserveGenericPage() {
        return this.jobserveGenericPage;
      }
}

export default PageManager;
