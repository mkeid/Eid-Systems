import { connect } from "react-redux"
import ContactBillboard from "../components/contact/contact_billboard"

// Wire up the contact billboard with redux to propoagate state
const mapStateToProps = ({ links }) => ({ links }) => ({
    links: _.map(links, (value, key) => value)
})

// Init redux container for ContactBillboard
const ContactBillboardContainer = connect(mapStateToProps)(ContactBillboard)

// Promote ContactBillboard from a component to a container
export default ContactBillboardContainer
