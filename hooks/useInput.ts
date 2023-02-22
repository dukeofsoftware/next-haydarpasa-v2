import { ChangeEvent, useState, useCallback } from 'react';
export const useInput = (initialValue="") => {
    const [value, setValue] = useState(initialValue);

    const handleChange = useCallback((event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValue(event.target.value);
    },[value])
    const reset = () => {
        setValue(initialValue);
    };

    return {
        value,
        onChange: handleChange,
        reset
    };
};