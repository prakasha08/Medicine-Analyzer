import React, { useState } from "react";
import {
    Box,
    Select,
    Button,
    Image,
    Center,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";

const MedicineDropdown = () => {
    const [selectedMedicine, setSelectedMedicine] = useState("");
    const [medicineImage, setMedicineImage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (event) => {
        setSelectedMedicine(event.target.value);
    };

    const handleButtonClick = () => {
        axios
            .get(`http://localhost:5000/api/medicineNames/${selectedMedicine}`)
            .then((response) => {
                setMedicineImage(response.request.responseURL);
                setErrorMessage("");
            })
            .catch((error) => {
                setMedicineImage("");
                setErrorMessage("Error: Could not find medicine.");
            });
    };

    const medicineOptions = [
        "AC-16",
        "AM-06",
        "AM-09",
        "AT-14",
        "CL-19",
        "DI-11",
        "DO-03",
        "EN-12",
        "ER-15",
        "GL-01",
        "LO-04",
        "ME-05",
        "ME-17",
        "OF-08",
        "PA-20",
        "RA-10",
        "RO-02",
        "VB-13",
        "VC-07",
        "VE-18",
    ];


    return (
        <Center height="100vh">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" boxShadow='dark-lg' p='6' rounded='md' bg='linear-gradient(135deg, #0AB57A, #4886FF)' h="95%" w="75%">
                <FormControl
                    id="medicine-select"
                    isInvalid={!!errorMessage}
                    isRequired
                    mt="4"
                >
                    <FormLabel textAlign="center" fontSize='2xl'>Medicine </FormLabel>
                    <Select
                        w="100%"
                        value={selectedMedicine}
                        onChange={handleSelectChange}
                        placeholder="Select a medicine"
                        mx="auto"
                        alignSelf="center"
                    >
                        {medicineOptions.map((medicine, index) => (
                            <option key={index} value={medicine}>
                                {medicine}
                            </option>
                        ))}
                    </Select>
                    <FormErrorMessage textAlign="center">{errorMessage}</FormErrorMessage>
                </FormControl>
                <Button onClick={handleButtonClick} mt="4" colorScheme='blackAlpha' variant='solid'>
                    Find Medicine
                </Button>
                {medicineImage ? (
                    <Center mt="4">
                        <Box>
                            <Image src={medicineImage} alt={selectedMedicine} />
                            <Text mt="2">{selectedMedicine}</Text>
                        </Box>
                    </Center>
                ) : null}
            </Box>
        </Center>
    );
};

export default MedicineDropdown;
