import React from 'react';

export const FormAddBilling = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Billing Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Jumlah Tagihan<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jumlahTagihan"/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan"/>
            </div>
             <input type="hidden" name="pasien.id" defaultValue={!props.pasien? "" : props.pasien.id}/>
            <button className="btn btn-success" value="submit">Add</button>
        </form>
    )
}