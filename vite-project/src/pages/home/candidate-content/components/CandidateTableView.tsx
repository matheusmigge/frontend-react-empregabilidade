import "./CandidateTableView.css"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import JOB_COLUMNS from "../../../../constants/jobColumns";
import { Candidate, Job } from "../../../../types";
import { getJobDistance } from "../../../../utils/distance";

interface CandidateTableViewProps {
    jobs: Job[];
    candidate: Candidate;
}

function CandidateTableView({ jobs, candidate }: CandidateTableViewProps) {
    const columns: GridColDef[] = JOB_COLUMNS.map((item) => {
        if (item.text === "Status") {
            return {
                field: item.text.toLowerCase(),
                headerName: item.text,
                flex: 1,
                minWidth: 150,
                renderHeader: () => (
                    <span className="table-header">
                        <img src={item.iconUrl} alt={item.text} />
                        {item.text}
                    </span>
                ),
                renderCell: (params: GridRenderCellParams) => (
                    params.value === "Encerrada" ? (
                        <span className="table-status-cell">{params.value}</span>
                    ) : (
                        <span>{params.value}</span>
                    )
                ),
            };
        }

        if (item.text === "Empresa") {
            return {
                field: item.text.toLowerCase(),
                headerName: item.text,
                flex: 1,
                minWidth: 150,
                renderHeader: () => (
                    <span className="table-header">
                        <img src={item.iconUrl} alt={item.text} />
                        {item.text}
                    </span>
                ),
                renderCell: (params: GridRenderCellParams) => (
                    <span className="table-cell">
                        {params.row.empresaLogo && (
                            <img
                                src={params.row.empresaLogo}
                                alt="Logo"
                            />
                        )}
                        {params.value}
                    </span>
                ),
            };
        }
        return {
            field: item.text.toLowerCase(),
            headerName: item.text,
            flex: 1,
            minWidth: 150,
            renderHeader: () => (
                <span className="table-header">
                    <img src={item.iconUrl} alt={item.text} style={{ width: 20, height: 20 }} />
                    {item.text}
                </span>
            ),
            renderCell: (params: GridRenderCellParams) => (
                <span className="table-cell">
                    {params.value}
                </span>
            ),
        };
    });

    const rows = jobs.map((job) => ({
        id: job.id,
        distância: getJobDistance(candidate, job),
        status: job.jobAvailable ? "Em andamento" : "Encerrada",
        empresa: job.company?.name,
        empresaLogo: job.company?.logoUrl,
        título: job.title,
        contratação: job.hiringType,
        modalidade: job.workModel,
    }));

    return (
        <div className="table-container">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10, page: 0 },
                    },
                }}
            />
        </div>
    );
}

export default CandidateTableView;