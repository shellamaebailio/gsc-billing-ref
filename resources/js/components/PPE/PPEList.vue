<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Personal Protective Equipments List Entry</b>
                    </h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-5">
                            <form @submit.prevent="save()">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Control No.</label>
                                            <input
                                                v-model="header.PLID"
                                                type="text"
                                                name="PLID"
                                                placeholder=""
                                                class="form-control"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Code</label>
                                            <input
                                                v-model="header.Code"
                                                type="text"
                                                name="Code"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Description</label>
                                            <input
                                                v-model="header.Description"
                                                type="text"
                                                name="Description"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Supplier</label>
                                            <input
                                                v-model="header.Supplier"
                                                type="text"
                                                name="Supplier"
                                                placeholder=""
                                                class="form-control"
                                                list="supplier"
                                            />
                                            <datalist id="supplier">
                                                <option v-for="item in suppliers">{{item.supName}}</option>
                                            </datalist>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Unit</label>
                                            <input
                                                v-model="header.Unit"
                                                type="text"
                                                name="Unit"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Unit Price</label>
                                            <input
                                                v-model="header.UnitPrice"
                                                type="text"
                                                name="UnitPrice"
                                                placeholder=""
                                                class="form-control"
                                                text-right
                                                bold
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-right">
                                        <div class="form-group">
                                            <label>&nbsp;</label>
                                            <button
                                                @click="clearButton()"
                                                class="btn btn-primary"
                                                type="button"
                                                bold
                                            >
                                                <i
                                                    class="fa fa-eraser"
                                                    aria-hidden="true"
                                                ></i>
                                                CLEAR
                                            </button>
                                            <label>&nbsp;</label>
                                            <button
                                                @click="deletePPEListButton()"
                                                class="btn btn-danger"
                                                type="button"
                                                bold
                                            >
                                                <i
                                                    class="fa fa-trash"
                                                    aria-hidden="true"
                                                ></i>
                                                DELETE
                                            </button>
                                            <label>&nbsp;</label>
                                            <button
                                                class="btn btn-success"
                                                type="submit"
                                                bold
                                            >
                                                <i
                                                    class="fa fa-save"
                                                    aria-hidden="true"
                                                ></i>
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12">
                                    <input
                                        v-model="search"
                                        type="text"
                                        name="search"
                                        placeholder="Search here..."
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 table-height">
                                    <table
                                        class="table table-hover table-striped dave-table"
                                    >
                                        <thead class="dave-thead">
                                            <tr>
                                                <th style="text-align:left;">Description</th>
                                                <th style="text-align:center;width:15%;">Unit</th>
                                                <th style="text-align:center;width:15%;">Unit Price</th>
                                            </tr>
                                        </thead>
                                        <tbody class="dave-tbody modal-tbody">
                                            <tr
                                                v-for="item in filteredBlogs"
                                                v-bind:key="item.AHID"
                                                v-on:click="rowClick(item)"
                                            >
                                                <td>
                                                    {{ item.Description }}
                                                </td>
                                                 <td>
                                                    {{ item.Supplier }}
                                                </td>
                                                <td style="width:15%;text-align:center;">{{ item.Unit }}</td>
                                                <td style="width:15%;text-align:right;">
                                                    {{
                                                        item.UnitPrice
                                                            | formatNumber
                                                    }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- MODAl -->
            <div
                class="modal fade"
                id="SearchSignatory"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addNewLabel"
                aria-hidden="true"
            >
                <div
                    class="modal-dialog modal-dialog-centered modal-md"
                    role="document"
                >
                    <div class="modal-content">
                        <div class="modal-header-cus">
                            <div class="row container-fluid">
                                <div class="col-md-11">
                                    <h5>
                                        <b
                                            >Personal Protective Equipments
                                            List</b
                                        >
                                    </h5>
                                </div>
                                <div class="col-md-1">
                                    <button
                                        type="button"
                                        class="close close-modal"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body-cus">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input
                                            v-model="search"
                                            type="text"
                                            name="search"
                                            placeholder="Search here..."
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 table-height">
                                        <table
                                            class="table table-hover table-striped dave-table"
                                        >
                                            <thead class="dave-thead">
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Description</th>
                                                    <th>Unit</th>
                                                    <th>Unit Price</th>
                                                </tr>
                                            </thead>
                                            <tbody class="dave-tbody modal-tbody">
                                                <tr
                                                    v-for="item in filteredBlogs"
                                                    v-bind:key="item.AHID"
                                                    v-on:click="rowClick(item)"
                                                >
                                                    <td>
                                                        {{ item.Code }}
                                                    </td>
                                                    <td>
                                                        {{ item.Description }}
                                                    </td>
                                                    <td>{{ item.Unit }}</td>
                                                    <td>
                                                        {{
                                                            item.UnitPrice
                                                                | formatNumber
                                                        }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: [],
            suppliers: [],
            search: "",
            type: "",
            header: {
                PLID: "",
                Code: "",
                Description: "",
                Unit: "",
                UnitPrice: "0.00",
                Supplier: ""
            }
        };
    },
    mounted() {
        this.getData();
        this.getSupplier();
    },
    methods: {
        rowClick: function(row) {
            this.header = Object.assign({}, row);
            this.header.UnitPrice = this.$root.formatNumberCommaRound(row.UnitPrice);
            this.$emit("rowClick", row);
            $("#PPEListModal").modal("hide");
        },
        getData() {
            axios
                .get("api/ppe", { params: { getPPEList: true } })
                .then(response => {
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getSupplier() {
            axios
                .get("api/allowance", { params: { getSupplier: true } })
                .then(response => {
                    this.suppliers = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        save() {
            var data = Object.assign({}, this.header);
            data.UnitPrice = this.$root.formatNumber(this.header.UnitPrice);
            this.$Progress.start();
            axios
                .post("api/ppeList", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.header.PLID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        this.formHeader = {};
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.getData();
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        deletePPEListButton() {
            if (!this.header.PLID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select a record to continue."
                });
            }
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    axios
                        .delete(`api/ppeList/${this.header.PLID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.getData();
                                this.clearButton();
                                swal.fire(
                                    "Deleted!",
                                    response.data.message,
                                    "success"
                                );
                            } else {
                                swal.fire(
                                    "Warning!",
                                    response.data.message,
                                    "warning"
                                );
                            }
                            this.$Progress.finish();
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    swal.fire(
                        "Information!",
                        "Deletion is cancelled.",
                        "warning"
                    );
                }
            });
        },
        clearButton() {
            this.header = {
                PLID: "",
                Code: "",
                Description: "",
                Unit: "",
                UnitPrice: "0.00",
                Supplier: "",
            };
        }
    },
    created() {
        
    },
    computed: {
        filteredBlogs() {
            return this.rows.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.Code.toLowerCase().includes(v) ||
                            item.Description.toLowerCase().includes(v) ||
                            item.Supplier.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
