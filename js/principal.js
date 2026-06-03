function descargarReporte(){

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const nombre =
    document.getElementById("inputNombre").value.trim();

    const detalle =
    document.getElementById("inputDetalle").value.trim();

    if(nombre === "" || detalle === ""){
        alert("Complete todos los campos");
        return;
    }

    doc.setFont("Helvetica","bold");
    doc.setFontSize(22);

    doc.text("REPORTE TÉCNICO OFICIAL",20,30);

    doc.line(20,35,190,35);

    doc.setFont("Helvetica","normal");
    doc.setFontSize(12);

    doc.text(`Operador: ${nombre}`,20,50);
    doc.text(`Detalle: ${detalle}`,20,65);

    doc.text(
        `Fecha: ${new Date().toLocaleDateString()}`,
        20,
        80
    );

    doc.text(
        `Hora: ${new Date().toLocaleTimeString()}`,
        20,
        95
    );

    doc.setFontSize(10);

    doc.text(
        "Documento generado automáticamente - EEST N°1 Vicente López",
        20,
        280
    );

    doc.save(`reporte_${nombre}.pdf`);
}