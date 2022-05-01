import React from 'react';
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Biography',
        path: 'bio',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Work Experience',
        path: 'work',
        icon: <MdIcons.MdWork />,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: 'Education',
        icon: <IoIcons.IoIosSchool/>,
        cName: 'nav-text'
    },
    {
        title: 'Publications',
        path: 'publication',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Languages',
        path: 'lang',
        icon: <MdIcons.MdLanguage />,
        cName: 'nav-text'
    },
    {
        title: 'IT Skills',
        path: 'it',
        icon: <MdIcons.MdComputer />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: 'projects',
        icon: <MdIcons.MdApps />,
        cName: 'nav-text'
    },


]