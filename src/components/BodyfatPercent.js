import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const BodyFatCalculator = () => {
    const [gender, setGender] = useState('');
    const [neckSize, setNeckSize] = useState('');
    const [waistSize, setWaistSize] = useState('');
    const [hips, setHips] = useState('');
    const [height, setHeight] = useState('');
    const [bodyFat, setBodyFat] = useState(null);
    const [error, setError] = useState('');

    const calculateBodyFat = () => {
        if (!gender || !neckSize || !waistSize || !height || (gender === 'female' && !hips)) {
            setError('Please fill in all fields correctly.');
            return;
        }

        let bodyFatPercentage;
        if (gender === 'male') {
            bodyFatPercentage = 86.010 * Math.log10(waistSize - neckSize) - 70.041 * Math.log10(height) + 36.76;
        } else {
            bodyFatPercentage = 163.205 * Math.log10(waistSize + hips - neckSize) - 97.684 * Math.log10(height) - 78.387;
        }

        setBodyFat(bodyFatPercentage.toFixed(2));
        setError('');
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Body Fat-% Calculator</h1>
            <Form>
                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formNeckSize">
                    <Form.Label>Neck Size (cm)</Form.Label>
                    <Form.Control type="number" value={neckSize} onChange={(e) => setNeckSize(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formWaistSize">
                    <Form.Label>Waist Size (cm)</Form.Label>
                    <Form.Control type="number" value={waistSize} onChange={(e) => setWaistSize(e.target.value)} />
                </Form.Group>

                {gender === 'female' && (
                    <Form.Group controlId="formHips">
                        <Form.Label>Hips Size (cm)</Form.Label>
                        <Form.Control type="number" value={hips} onChange={(e) => setHips(e.target.value)} />
                    </Form.Group>
                )}

                <Form.Group controlId="formHeight">
                    <Form.Label>Height (cm)</Form.Label>
                    <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </Form.Group>

                <Button className="mt-2 w-100" variant="primary" onClick={calculateBodyFat}>
                    Calculate
                </Button>
            </Form>

            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

            {bodyFat && (
                <Alert variant="success" className="mt-3">
                    Your Body Fat Percentage: {bodyFat}%
                </Alert>
            )}
        </Container>
    );
};

export default BodyFatCalculator;