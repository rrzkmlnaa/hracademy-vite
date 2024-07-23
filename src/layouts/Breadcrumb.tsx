import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
};

const Breadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: BreadcrumbProps) => {
    // Simulate current pathnames for demonstration
    const paths = window.location.pathname;

    if (!paths) {
        return null;
    }

    const pathNames = paths.split('/').filter(path => path);

    const isHome = pathNames.length === 0;

    const isSertifikasiHR = pathNames[1] === "sertifikasi-hr";  
    const isInformasiTraining = pathNames[1] === "informasi-training";  

    if (isHome) {
        return null;
    }

    if (isSertifikasiHR) {
        return null;
    }

    if (isInformasiTraining) {
        return null;
    }

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}><Link to='/'>{homeElement}</Link></li>
                {pathNames.length > 0 && separator}
                {
                    pathNames.map((link, index) => {
                        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
                        const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1) : link;
                        const spacedItemLink = itemLink.replace(/-/g, ' ');
                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses}>
                                    <Link to={href}>{spacedItemLink}</Link>
                                </li>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Breadcrumb;
