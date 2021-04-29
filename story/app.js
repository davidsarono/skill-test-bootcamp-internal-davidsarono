const app = Vue.createApp({
    data() {
        return {
            isOpenModal: false,
            showPayment: false,
            restoName: '',
            datePrintAt: '',
            cashierName: '',
            itemName: '',
            priceItem: '',
            items: [],
        }
    },
    methods: {
        openModal() {
            this.isOpenModal = true;
            if (this.showPayment === true) this.showPayment = false;
        },
        closeModal() {
            this.isOpenModal = false;
        },
        addItem() {
            this.items.push({ name: this.itemName, price: this.getPrice });
            this.itemName = '';
            this.priceItem = '';
        },
        toggleShow() {
            if (
                this.restoName !== '' &&
                this.datePrintAt !== '' &&
                this.cashierName !== ''
            ) {
                this.showPayment = !this.showPayment;
            }
        },
        print() {

            // use jsPDF for output
            const doc = new jspdf.jsPDF();
            doc.setFont("helvetica", "bold");
            doc.text(this.restoName, 7, 15);

            doc.setFillColor("#ebecf0");
            doc.text("Tanggal ", 7, 30);
            doc.text(":", 42, 30);
            doc.text(this.getDate, 45, 30);

            doc.text("Nama Kasir", 7, 38);
            doc.text(":", 42, 38);
            doc.text(this.cashierName, 45, 38);
            doc.autoTable({
                body: this.items,
                columns: [
                    {header: "Item", dataKey: "name"},
                    {header: "Price", dataKey: "price"}
                ],
                theme: "plain",
                startY: doc.internal.getCurrentPageInfo().pageNumber === 1 ? 50 : 0,
                margin: { top: 7, left: 7, right: 7, bottom: 7 },
                headStyles: {
                    font: "helvetica",
                    fontStyle: "bold",
                    fillColor: "#f5f6f7",
                    textColor: "#1a1421",
                    fontSize: 12,
                    halign: "left",
                    cellPadding: { top: 4, right: 2, bottom: 4, left: 2 }
                },
                bodyStyles: {
                    font: "helvetica",
                    fontStyle: "normal",
                    fillColor: "#fff",
                    textColor: "#1a1421",
                    fontSize: 12,
                    halign: "left",
                    valign: "top",
                    lineColor: "#e0e0e0",
                    lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 },
                    cellPadding: { top: 4, right: 2, bottom: 4, left: 2 },
                    cellWidth: "auto"
                },
            });

            window.open(doc.output("bloburl"), "_blank");

            if (this.showPayment === true) this.showPayment = false;
            this.resetInput();
        },
        resetInput() {
            this.restoName = '';
            this.datePrintAt = '';
            this.cashierName = '';
            this.items = [];
        }
    },
    computed: {
        getPrice() {
            return `Rp ${parseInt(this.priceItem).toLocaleString('id')}`;
        },
        getDate() {
            return this.datePrintAt.replace(/T/, '  ');
        }
    }
})


app.mount('#app');