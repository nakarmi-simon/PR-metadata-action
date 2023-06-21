const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
        const owner = core.getInput('owner', { required: true });
        const repo = core.getInput('repo', { required: true });
        const pr_number = core.getInput('pr_number', { required: true });
        const token = core.getInput('token', { required: true });

        const octokit=new github.getOctokit(token);

        const {data: projects}=await octokit.projects;

        core.debug(projects)

    } catch (error) {
        core.setFailed(error.message);
    }
}