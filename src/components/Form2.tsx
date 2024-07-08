import {useForm} from "../hooks/useForm";

export const Form2 = () => {

    const { form, handleChange} = useForm({
        zipCode: 'ABC',
        city: 'Cali'
    });

    const { zipCode, city } = form;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Zip Code:</label>
                <input
                    type="text"
                    className="form-control"
                    name="zipCode"
                    value={zipCode}
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">City:</label>
                <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={ handleChange }
                />
            </div>

            <pre> { JSON.stringify(form) }</pre>
        </form>
    );
};
