import "./PromptUI.css";

import React from "react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

interface PromptUIProps {
    disabled: boolean;
    onSubmit: (query: string) => void;
}

function PromptUI(props: PromptUIProps) {
    // Properties
    const { disabled, onSubmit } = props;

    // State
    const [query, setQuery] = React.useState("");

    // Constants
    const label = "Question?";
    const helperText = "Ask any question about air quality in cities.";

    // Methods
    const submitQuery = () => {
        if (query.trim().length > 0) {
            onSubmit(query);
        }

        setQuery("");
    }

    // Event Handlers
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setQuery(event.target.value);
    };
    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.key === "Enter") {
            submitQuery();
        }
    };
    const handleOnMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <FormControl
            fullWidth
            className="PromptUI"
            disabled={disabled}
            variant="outlined">
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                label={label}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            onClick={submitQuery}
                            onMouseDown={handleOnMouseDown}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </InputAdornment>
                }
                value={query}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}

export default PromptUI;
