import { connect } from "react-redux"
import ContactBillboard from "../components/contact/contact_billboard"

// Wire up the contact billboard with redux to propagate state
const mapStateToProps = ({ links }) => ({
    links: _.map(links, (value, key) => value)
})

const ContactBillboardContainer = connect(mapStateToProps)(ContactBillboard)

export default ContactBillboardContainer
