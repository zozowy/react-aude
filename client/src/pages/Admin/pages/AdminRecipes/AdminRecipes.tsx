import { Outlet, useLocation } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";
import { Suspense } from "react";

export default function AdminRecipes() {
    const { key } = useLocation(); 

    return(
        <>
            <div className="d-flex flex-column flex-fill"> 
                <h4 className="mb-20">
                    Gestion des Recettes :)
                </h4>
                <div className="flex-fill d-flex flex-column">
                    <AdminRecipesNav></AdminRecipesNav>
                    <div className="flex-fill d-flex flex-column">
                        <Suspense>
                            <Outlet key={ key } />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
}