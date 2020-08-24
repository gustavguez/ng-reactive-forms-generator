const FormWrapperTemplate = `
    <form name="@name" [formGroup]="form">
        @children
    </form>
`;
export default FormWrapperTemplate;
