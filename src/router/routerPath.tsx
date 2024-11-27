export  const RoutePath = {
    home:'home',
    contact:'contact',
    login:'login',
    register:'register',
    // courseList:'course-list',
    postDetails:'course-details',
    courseList:'courses',
    servicePage:'service',
    admin:'admin',
    about:'about',
    task:'test',
    profile:'profile',
    editProfile:'edit-profile',
    profilePosts:'my-Posts',
    videoDisplay:'video',
    profileCreatePosts:'create-Posts',
    profileDashboard:'dashboard',
    devTools:"dev-tools",
    cousersClassList:"/course-list-class",
    initialPage:'/'
} as const


export const ProfileNavList = [{
    label: 'Dashboard',
    path: RoutePath.profileDashboard,
    isActive: false,
    key: 0
}, 
// {
//     label: 'My learing',
//     path: RoutePath.profilePosts,
//     isActive: false,
//     key: 1
// },
{
    label: 'Create Video',
    path: RoutePath.profileCreatePosts,
    isActive: false,
    key: 2
}, 
{
    label: 'Profile',
    path: RoutePath.editProfile,
    isActive: false,
    key: 3
}
]