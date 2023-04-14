function getSpeedometerSegmentValueFormatter() {
    return (value: string) => {
        switch (value) {
            case "0":
                return "😁0";
            case "100":
                return "😀50";
            case "200":
                return "🤒100";
            case "300":
                return "🤧150";
            case "400":
                return "😷200";
            case "500":
                return "💀300";
            case "600":
                return "500";
            default:
                return value;
        }
    }
}

export default getSpeedometerSegmentValueFormatter;
