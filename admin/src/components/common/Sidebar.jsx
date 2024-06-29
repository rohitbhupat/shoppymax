import React, { useState } from 'react';
import { HomeIcon, UserIcon, CogIcon, ChevronDownIcon, ChevronRightIcon, ShoppingCartIcon, TagIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/outline';
import { useTheme } from '../../ThemeProvider';
import { Link } from 'react-router-dom';
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
        <div className={`w-64 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} p-4 flex-shrink-0 h-screen`}>
            <ul className="space-y-2">
                <li className="group">
                    <Link to="#" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}>
                        <HomeIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Home</span>
                    </Link>
                </li>

                {/* Products Dropdown */}
                <li className="group">
                    <div
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}
                        onClick={toggleProductsDropdown}
                    >
                        <ShoppingCartIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Products</span>
                        {isProductsDropdownOpen ? (
                            <ChevronDownIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        ) : (
                            <ChevronRightIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        )}
                    </div>
                    {isProductsDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="/addproduct" onClick={toggleAddProductForm} className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Add Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={toggleGetProductList} className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Products Listing
                                </Link>
                            </li>
                            <li>
                                <Link to="/updateproduct/:id" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Update Products
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Users Dropdown */}
                <li className="group">
                    <div
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}
                        onClick={toggleUsersDropdown}
                    >
                        <UserIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Users</span>
                        {isUsersDropdownOpen ? (
                            <ChevronDownIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        ) : (
                            <ChevronRightIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        )}
                    </div>
                    {isUsersDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Add Users
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Users List
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Update Users
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Sellers Dropdown */}
                <li className="group">
                    <div
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}
                        onClick={toggleSellersDropdown}
                    >
                        <CogIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Sellers</span>
                        {isSellersDropdownOpen ? (
                            <ChevronDownIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        ) : (
                            <ChevronRightIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        )}
                    </div>
                    {isSellersDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Add Sellers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Sellers List
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Update Sellers
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Categories Dropdown */}
                <li className="group">
                    <div
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}
                        onClick={toggleCategoriesDropdown}
                    >
                        <TagIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Categories</span>
                        {isCategoriesDropdownOpen ? (
                            <ChevronDownIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        ) : (
                            <ChevronRightIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        )}
                    </div>
                    {isCategoriesDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Add Categories
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Categories List
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Update Categories
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Delivery Status Dropdown */}
                <li className="group">
                    <div
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}
                        onClick={toggleDeliveryStatusDropdown}
                    >
                        <TruckIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Delivery Status</span>
                        {isDeliveryStatusDropdownOpen ? (
                            <ChevronDownIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        ) : (
                            <ChevronRightIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        )}
                    </div>
                    {isDeliveryStatusDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Update Delivery Status
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Payments Dropdown */}
                <li className="group">
                    <div
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}
                        onClick={togglePaymentsDropdown}
                    >
                        <CurrencyDollarIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>Payments</span>
                        {isPaymentsDropdownOpen ? (
                            <ChevronDownIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        ) : (
                            <ChevronRightIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`} />
                        )}
                    </div>
                    {isPaymentsDropdownOpen && (
                        <ul className="ml-6 space-y-2">
                            <li>
                                <Link to="#" className={`block p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'} ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-white-500`}>
                                    Update Payments
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
            {/* Render ProductForm conditionally */}
            {isAddingProduct && <ProductForm />}
        </div>
    );
};

export default Sidebar;
