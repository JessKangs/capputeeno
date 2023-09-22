import { Layout, PageNum } from "../../styles/home";
import Image from "next/image";
import LeftArrow from "../../public/Arrows, Diagrams/LeftArrow.svg";
import RightArrow from "../../public/Arrows, Diagrams/RightArrow.svg"

export default function Pages () {

    return (
        <Layout>
            <PageNum>
                1
            </PageNum>
            <PageNum>
                2
            </PageNum>
            <PageNum>
                3
            </PageNum>
            <PageNum>
                4
            </PageNum>
            <PageNum>
                5
            </PageNum>
            <PageNum>
                <Image src={LeftArrow} alt=" "/>
            </PageNum>
            <PageNum>
                <Image src={RightArrow} alt=" "/>
            </PageNum>
        </Layout>

    );
}