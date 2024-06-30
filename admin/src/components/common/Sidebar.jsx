import React, { useState } from 'react';
import { HomeIcon, UserIcon, CogIcon, ChevronDownIcon, ChevronRightIcon, ShoppingCartIcon, TagIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/outline';
import { useTheme } from '../../ThemeProvider';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ProductForm from '../products/ProductForm';

const Sidebar = () => {
    const { mode } = useTheme();
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
    const [isSellersDropdownOpen, setIsSellersDropdownOpen] = useState(false);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
    const [isDeliveryStatusDropdownOpen, setIsDeliveryStatusDropdownOpen] = useState(false);
    const [isPaymentsDropdownOpen, setIsPaymentsDropdownOpen] = useState(false);
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [isGetProductList, setIsGetProductList] = useState(false);

    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };

    const toggleAddProductForm = () => {
        setIsAddingProduct(!isAddingProduct);
    };

    const toggleGetProductList = () => {
        setIsGetProductList(!isGetProductList);
    };

    const toggleUsersDropdown = () => {
        setIsUsersDropdownOpen(!isUsersDropdownOpen);
    };

    const toggleSellersDropdown = () => {
        setIsSellersDropdownOpen(!isSellersDropdownOpen);
    };

    const toggleCategoriesDropdown = () => {
        setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
    };

    const toggleDeliveryStatusDropdown = () => {
        setIsDeliveryStatusDropdownOpen(!isDeliveryStatusDropdownOpen);
    };

    const togglePaymentsDropdown = () => {
        setIsPaymentsDropdownOpen(!isPaymentsDropdownOpen);
    };

    return (
        <div className={classNames('w-64 p-4 flex-shrink-0 fixed h-screen', {
            'bg-gray-800': mode === 'dark',
            'bg-gray-100': mode !== 'dark'
        })}>
            <br/>
            <ul className="space-y-2">
                <li className="group">
                    <Link to="#" className={classNames('flex items-center space-x-2 p-2 rounded-md hover:bg-gray-300', {
                        'hover:bg-gray-700': mode === 'dark',
                        'text-white': mode === 'dark',
                        'text-gray-700': mode !== 'dark'
                    })}>
                        <HomeIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Home</span>
                    </Link>
                </li>

                {/* Products Dropdown */}
                <li className="group">
                    <div
                        className={classNames('flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300', {
                            'hover:bg-gray-700': mode === 'dark',
                            'text-white': mode === 'dark',
                            'text-gray-700': mode !== 'dark'
                        })}
                        onClick={toggleProductsDropdown}
                    >
                        <ShoppingCartIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Products</span>
                        {isProductsDropdownOpen ? (
                            <ChevronDownIcon className="h-5 w-5 group-hover:text-white-500" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5 group-hover:text-white-500" />
                        )}
                    </div>
                    {isProductsDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="/addproduct" onClick={toggleAddProductForm} className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Add Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={toggleGetProductList} className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Products Listing
                                </Link>
                            </li>
                            <li>
                                <Link to="/updateproduct/:id" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Update Products
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Users Dropdown */}
                <li className="group">
                    <div
                        className={classNames('flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300', {
                            'hover:bg-gray-700': mode === 'dark',
                            'text-white': mode === 'dark',
                            'text-gray-700': mode !== 'dark'
                        })}
                        onClick={toggleUsersDropdown}
                    >
                        <UserIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Users</span>
                        {isUsersDropdownOpen ? (
                            <ChevronDownIcon className="h-5 w-5 group-hover:text-white-500" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5 group-hover:text-white-500" />
                        )}
                    </div>
                    {isUsersDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Add Users
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Users List
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Update Users
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Sellers Dropdown */}
                <li className="group">
                    <div
                        className={classNames('flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300', {
                            'hover:bg-gray-700': mode === 'dark',
                            'text-white': mode === 'dark',
                            'text-gray-700': mode !== 'dark'
                        })}
                        onClick={toggleSellersDropdown}
                    >
                        <CogIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Sellers</span>
                        {isSellersDropdownOpen ? (
                            <ChevronDownIcon className="h-5 w-5 group-hover:text-white-500" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5 group-hover:text-white-500" />
                        )}
                    </div>
                    {isSellersDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Add Sellers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Sellers List
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Update Sellers
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Categories Dropdown */}
                <li className="group">
                    <div
                        className={classNames('flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300', {
                            'hover:bg-gray-700': mode === 'dark',
                            'text-white': mode === 'dark',
                            'text-gray-700': mode !== 'dark'
                        })}
                        onClick={toggleCategoriesDropdown}
                    >
                        <TagIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Categories</span>
                        {isCategoriesDropdownOpen ? (
                            <ChevronDownIcon className="h-5 w-5 group-hover:text-white-500" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5 group-hover:text-white-500" />
                        )}
                    </div>
                    {isCategoriesDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Add Categories
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Categories List
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Update Categories
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Delivery Status Dropdown */}
                <li className="group">
                    <div
                        className={classNames('flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300', {
                            'hover:bg-gray-700': mode === 'dark',
                            'text-white': mode === 'dark',
                            'text-gray-700': mode !== 'dark'
                        })}
                        onClick={toggleDeliveryStatusDropdown}
                    >
                        <TruckIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Delivery Status</span>
                        {isDeliveryStatusDropdownOpen ? (
                            <ChevronDownIcon className="h-5 w-5 group-hover:text-white-500" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5 group-hover:text-white-500" />
                        )}
                    </div>
                    {isDeliveryStatusDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Check Delivery Status
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Update Delivery Status
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Payments Dropdown */}
                <li className="group">
                    <div
                        className={classNames('flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-300', {
                            'hover:bg-gray-700': mode === 'dark',
                            'text-white': mode === 'dark',
                            'text-gray-700': mode !== 'dark'
                        })}
                        onClick={togglePaymentsDropdown}
                    >
                        <CurrencyDollarIcon className="h-5 w-5 group-hover:text-white-500" />
                        <span className="group-hover:text-white-500">Payments</span>
                        {isPaymentsDropdownOpen ? (
                            <ChevronDownIcon className="h-5 w-5 group-hover:text-white-500" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5 group-hover:text-white-500" />
                        )}
                    </div>
                    {isPaymentsDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Check Payments Status
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={classNames('block p-2 rounded-md hover:bg-gray-300', {
                                    'hover:bg-gray-700': mode === 'dark',
                                    'text-white': mode === 'dark',
                                    'text-gray-700': mode !== 'dark'
                                })}>
                                    Update Payments Status
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            {/* Render the ProductForm component conditionally */}
            {isAddingProduct && <ProductForm />}
        </div>
    );
};

export default Sidebar;
