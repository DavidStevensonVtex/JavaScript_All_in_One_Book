async function getFacebookJSON() {
    const response = await fetch('https://api.github.com/orgs/facebook');
    const json = await response.json() ;
    console.log(json);
}

getFacebookJSON();

// {
//     login: 'facebook',
//     id: 69631,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
//     url: 'https://api.github.com/orgs/facebook',
//     repos_url: 'https://api.github.com/orgs/facebook/repos',
//     events_url: 'https://api.github.com/orgs/facebook/events',
//     hooks_url: 'https://api.github.com/orgs/facebook/hooks',
//     issues_url: 'https://api.github.com/orgs/facebook/issues',
//     members_url: 'https://api.github.com/orgs/facebook/members{/member}',
//     public_members_url: 'https://api.github.com/orgs/facebook/public_members{/member}',
//     avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
//     description: 'We are working to build community through open source technology. NB: members must have two-factor auth.',
//     name: 'Meta',
//     company: null,
//     blog: 'https://opensource.fb.com',
//     location: 'Menlo Park, California',
//     email: null,
//     twitter_username: 'MetaOpenSource',
//     is_verified: true,
//     has_organization_projects: true,
//     has_repository_projects: true,
//     public_repos: 129,
//     public_gists: 12,
//     followers: 16457,
//     following: 0,
//     html_url: 'https://github.com/facebook',
//     created_at: '2009-04-02T03:35:22Z',
//     updated_at: '2022-04-01T07:03:49Z',
//     archived_at: null,
//     type: 'Organization'
//   }