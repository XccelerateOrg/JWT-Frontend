import * as React from 'react';
import ShoppingList from '../components/ShoppingList'
import GoBack from '../components/GoBack'
import { logoutNowThunk } from '../redux/auth/actions'
import { useDispatch } from 'react-redux'

export default function ShoppingListPage() {
    const dispatch = useDispatch();

    const shopping = [
        { id: 0, item: "Apples" },
        { id: 1, item: "Minced Pork" },
        { id: 2, item: "Eggs" },
        { id: 3, item: "Flour" }
    ];
    
    return (
        <div>

            <button onClick={() => dispatch(logoutNowThunk())}>Now you can Logout</button>

            <GoBack />
            <ShoppingList name="Sam" list={shopping} />
        </div>
    )
}
