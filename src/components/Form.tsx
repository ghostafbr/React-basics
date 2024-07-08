import {useForm} from "../hooks/useForm";

interface formData {
    email: string,
    name: string,
    age: number
}

export const Form = () => {

    const { email, name, age, form, handleChange } = useForm<formData>({
        email: 'ghostafbr@gmail.com',
        name: 'Andrés FBR',
        age: 28
    });

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={ name }
                    onChange={ handleChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Age:</label>
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={ age }
                    onChange={ handleChange }
                />
            </div>

            <pre> { JSON.stringify(form) }</pre>
        </form>
    );
};
