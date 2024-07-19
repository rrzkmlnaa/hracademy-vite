import Sertifikasi from "./partials/Sertifikasi";
import DoobleDegree from "./partials/DoubleDegree";
import Benefit from "./partials/Benefit";
import Coach from "./partials/coach";
import Role, { roles } from './partials/Role'
import Level from './partials/Level'
import Program from './partials/Program'
import Testimonial from './partials/testimoni'
import Join from './partials/join'

export default function Index() {
    const selectedRoles = roles.slice(0, 3)
    return (
        <>
            <Sertifikasi />

            <DoobleDegree />

            <Benefit />

            <Coach />

            <Role
                title="TEMUKAN SOLUSI KHUSUS UNTUK ANDA"
                bgColor="none"
                titleStyle="absolute bottom-0"
                roles={selectedRoles}
            />

            <Level />

            <Program />

            <Testimonial />

            <Join />
        </>
    );
}
