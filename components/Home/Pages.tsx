import { Layout, PageNum } from "../../styles/home";
import Image from "next/image";
import LeftArrow from "../../public/Arrows, Diagrams/LeftArrow.svg";
import RightArrow from "../../public/Arrows, Diagrams/RightArrow.svg"

export default function Pages ({ setInicial, initial }) {

    return (
        <Layout>
            <PageNum onClick={() => setInicial(0)}>
                1
            </PageNum>
            <PageNum onClick={() => setInicial(9)}>
                2
            </PageNum>
            <PageNum onClick={() => setInicial(18)}>
                3
            </PageNum>
            <PageNum onClick={() => setInicial(27)}>
                4
            </PageNum>
            <PageNum onClick={() => setInicial(36)}>
                5
            </PageNum>
            <PageNum onClick={() => setInicial(initial - 9)}>
                <Image src={LeftArrow} alt=" "/>
            </PageNum>
            <PageNum onClick={() => setInicial(initial + 9)}>
                <Image src={RightArrow} alt=" "/>
            </PageNum>
        </Layout>

    );
}