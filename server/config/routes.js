var blogPosts = require('../controllers/blog-posts.controller.js');
var users = require('../controllers/users.controller.js');
var jobPostings = require('../controllers/job-postings.controller');
var teamMembers = require('../controllers/team-members.controller');
var companyNews = require('../controllers/company-news.controller');

module.exports = function(app) {
    // Blog Posts routes
    app.get('/api/posts', blogPosts.fetchPosts);
    app.post('/api/posts/add-post', blogPosts.addPost);
    app.get('/api/posts/:id', blogPosts.fetchPost);
    app.delete('/api/posts/:id', blogPosts.deletePost);
    app.put('/api/posts/:id', blogPosts.updatePost);

    // User routes
    app.post('/api/users/add-user', users.createUser);
    app.put('/api/users/:id', users.updateUser);
    app.delete('/api/users/:id', users.deleteUser);
    app.get('/api/users', users.fetchUsers);
    app.get('/api/users/:id', users.fetchUserById);

    // Job Postings routes
    app.get('/api/job-postings', jobPostings.fetchJobs);
    app.get('/api/job-postings/:id', jobPostings.fetchJob);
    app.post('/api/job-postings/job-post', jobPostings.addJobPosting);
    app.put('/api/job-postings/job-post/:id', jobPostings.updateJobPosting);
    app.delete('/api/job-postings/:id', jobPostings.deleteJobPosting);

    // Team Member routes
    app.get('/api/team-members', teamMembers.fetchTeamMembers);
    app.get('/api/team-members/:id', teamMembers.fetchTeamMember);
    app.delete('/api/team-members/:id', teamMembers.deleteTeamMember);
    app.post('/api/team-members/add-team-member', teamMembers.addTeamMember);
    app.put('/api/team-members/:id', teamMembers.updateTeamMember);

    // Company News routes
    app.get('/api/company-news', companyNews.fetchCompanyNews);
    app.get('/api/company-news/:id', companyNews.fetchCompanyNewsPost);
    app.delete('/api/company-news/:id', companyNews.deleteCompanyNews);
    app.post('/api/company-news/add-company-news', companyNews.addCompanyNews);
    app.put('/api/company-news/:id', companyNews.updateCompanyNews);

   
};
