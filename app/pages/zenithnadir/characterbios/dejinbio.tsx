import type { Route } from "./+types/home";
import { useState } from 'react';
import ImageModal from "~/components/imagemodal";

import PageHeader from '../../../components/pageheader.tsx';
import '../../../../csssheets/pageheader.css';
import PageFooter from '../../../components/pagefooter.tsx';
import '../../../../csssheets/pagefooter.css';

import '../../../../csssheets/znstyle.css';
import ZNNHeader from "~/components/znnheader";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Sakura Fox Fyre Dreams - Dejin's Bio" },
        { name: "description", content: "beep" },
    ];
};

export default function DejinBio() {
    const [imageModalVisible, setImageModalVisible] = useState(false);
    const [imagePath, setImagePath] = useState('/testicon.png');

    return (
        <>
        <div className = 'background-setup'>
            <img src = '../../../../../images/zntreeimage.png' id = 'background-image' />
        </div>
        <div className = 'backgound-setup' id = 'background-opacity-filter'></div>

        <PageHeader />

        {imageModalVisible && <ImageModal imagePath = {imagePath} setImageModalVisible = {setImageModalVisible} />}

        <ZNNHeader />

        <div className = "page_section">
            <div className = "spacer"></div>

            <div className = "main_section">
                <div className = 'bio_section'>
                    <h1 className = 'character_name' id = 'dejin_name'>Dejin</h1>
                    <img src = '/testicon.png' className = 'character_icon' />
                    <p className = 'character_bio'></p>
                </div>

                <div className = 'gallery_section'>
                    <img src = '/testicon.png' className = 'gallery_image' onClick = {() => {
                        setImageModalVisible(true);
                        setImagePath('/testicon.png');
                    }} />
                </div>

                <div className = 'full_bio_section'>

                </div>

            </div>

            <div className = "spacer"></div>
        </div>
           
        <PageFooter />
        </>
    )
};