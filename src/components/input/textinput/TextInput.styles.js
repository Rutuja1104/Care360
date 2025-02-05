export default {

    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "16px"
    },

    label: {
        fontSize: "16px",
        color: "#676767",
        marginBottom: "8px",
        lineHeight: "20px",
    },

    inputContainer: {
        display: "flex",
        position: "relative",
    },
    textInput: {
        padding: "10px 12px",
        width: "100%",
        borderRadius: "var(--1, 8px)",
        border: "1px solid var(--grey-40, #D2D2D2)",
        flex: "1",
        paddingRight: "30px",
    },
    iconPosition: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
    },
    prefixIcon: {
        paddingRight: "7px"
    },
    suffixIcon: {
        paddingLeft: "7px"
    },
    labelWTooltipContainer: {
        display: "flex",
        alignItems: "baseline",
        columnGap: "5px"
    },
    errorStyles: {
        border: "1px solid var(--grey-40, #E05243)",
        borderRadius: "var(--1, 8px)"
    },
    errorStar: {
        color: "red"
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    iconsRows: {
        display: 'flex',
        gap: "5px"
    },
    widthIcon: {
        width: "20px",
        height: "20px",
    },
    subLabel: {
        color: '#1A1A1A99',
        height: "24px",
        marginBottom: "10px"
    },
    emptyLabel: {
        height: '20px',
    },
    emptySubLabel: {
        height: '24px',
        marginBottom: "12px"
    },
};
