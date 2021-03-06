import React, { useEffect, useState } from 'react';


import WishesLines from '../components/WishesLines';
import PromisesBlock from '../components/PromisesBlock'
import PromiseModal from '../components/Modals/PromiseModal';
import GreetingText from '../components/GreetingText';
import LanguagePicker from '../components/LanguagePicker';


const Main = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <LanguagePicker />
            <WishesLines />
            <div className="app-content">
                <GreetingText />
                <PromisesBlock />
            </div>

            {<PromiseModal open={open} setOpen={setOpen} />}
        </>
    )
}
export default Main;
