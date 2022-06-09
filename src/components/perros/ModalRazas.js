function ModalRazas(props) {
    return (
        <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.pm3}</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.pm5}<br/>
                        {props.pm7}<br/>
                        {props.pm8}
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Excelente información</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRazas;