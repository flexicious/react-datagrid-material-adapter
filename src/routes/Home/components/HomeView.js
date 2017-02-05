import React from 'react'


import DuckImage from '../assets/Duck.jpg'
import FlexiciousMockGenerator from '../../../mockdata/FlexiciousMockGenerator'
import './HomeView.scss'

import MaterialAdapter from '../../../adapter/material/MaterialAdapter';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import { Tab, Tabs } from 'material-ui/Tabs';
import { Constants, StyleDefaults, UIUtils, ReactDataGrid, ReactDataGridColumnLevel, ReactDataGridColumn, ClassFactory, UIComponent } from '../../../js/library'
import CustomSettingsPopup from './CustomSettingsPopup'
Constants.IMAGE_PATH = "http://reactdatagrid.com/images";
StyleDefaults.defaults.imagesRoot = "http://reactdatagrid.com/images";

export default class HomeView extends React.Component {
    constructor() {
        super();
        this.allDepartments = [{ label: 'Sales', data: 'Sales' }, { label: 'Marketing', data: 'Marketing' }];
        this.tradingView_timer = null;
        this.tradingView_running = false;
        this.tradingView_repeatrate = 1;

    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    componentDidMount() {
        const dp = [];
        for (var i = 0; i < 7000; i++) {
            dp.push(this.generateObject(i))
        }
        const grid = this.refs.grid;
        grid.setDataProvider(dp);
        grid.getColumns().map((col)=>{col.setWidth(150)})
        CustomSettingsPopup.buildColumns(grid, grid.getColumns(), function (i) { return i < 4; })
        grid.refreshLayout();
        grid.rebuild();
    }
    generateObject(i) {
        return {
            "investor": "Person " + i,
            "salesPerson": "Sales Person_" + i,
            "desk": "Sales",
            "type_0": (i % 2),
            "type_1": "500" + i,
            "type_2": parseInt(Math.random() * 10),
            "type_3": "Person " + i,
            "type_4": "test" + i,
            "type_5": "flex " + i,
            "type_6": "html " + i,
            "type_7": "Java " + i,
            "type_8": "Developer",
            "type_9": "test@flexious.com",
            "type_10": "Grid",



            "aapl2yrtype_0": (i % 3),
            "aapl2yrtype_1": "500" + i,
            "aapl2yrtype_2": parseInt(Math.random() * 10),
            "aapl2yrtype_3": "Person " + i,
            "aapl2yrtype_4": "test" + i,
            "aapl2yrtype_5": "flex " + i,
            "aapl2yrtype_6": "html " + i,
            "aapl2yrtype_7": "Java " + i,
            "aapl2yrtype_8": "Developer",
            "aapl2yrtype_9": "test@flexious.com",
            "aapl2yrtype_10": "Grid",

            "aapl3yrtype_0": (i % 3),
            "aapl3yrtype_1": "500" + i,
            "aapl3yrtype_2": parseInt(Math.random() * 10),
            "aapl3yrtype_3": "Person " + i,
            "aapl3yrtype_4": "test" + i,
            "aapl3yrtype_5": "flex " + i,
            "aapl3yrtype_6": "html " + i,
            "aapl3yrtype_7": "Java " + i,
            "aapl3yrtype_8": "Developer",
            "aapl3yrtype_9": "test@flexious.com",
            "aapl3yrtype_10": "Grid",


            "aapl4yrtype_0": (i % 4),
            "aapl4yrtype_1": "500" + i,
            "aapl4yrtype_2": parseInt(Math.random() * 10),
            "aapl4yrtype_3": "Person " + i,
            "aapl4yrtype_4": "test" + i,
            "aapl4yrtype_5": "flex " + i,
            "aapl4yrtype_6": "html " + i,
            "aapl4yrtype_7": "Java " + i,
            "aapl4yrtype_8": "Developer",
            "aapl4yrtype_9": "test@flexious.com",
            "aapl4yrtype_10": "Grid",


            "aapl5yrtype_0": (i % 4),
            "aapl5yrtype_1": "500" + i,
            "aapl5yrtype_2": parseInt(Math.random() * 10),
            "aapl5yrtype_3": "Person " + i,
            "aapl5yrtype_4": "test" + i,
            "aapl5yrtype_5": "flex " + i,
            "aapl5yrtype_6": "html " + i,
            "aapl5yrtype_7": "Java " + i,
            "aapl5yrtype_8": "Developer",
            "aapl5yrtype_9": "test@flexious.com",
            "aapl5yrtype_10": "Grid",

            "aapl10yrtype_0": (i % 4),
            "aapl10yrtype_1": "500" + i,
            "aapl10yrtype_2": parseInt(Math.random() * 10),
            "aapl10yrtype_3": "Person " + i,
            "aapl10yrtype_4": "test" + i,
            "aapl10yrtype_5": "flex " + i,
            "aapl10yrtype_6": "html " + i,
            "aapl10yrtype_7": "Java " + i,
            "aapl10yrtype_8": "Developer",
            "aapl10yrtype_9": "test@flexious.com",
            "aapl10yrtype_10": "Grid",



            "aapl15yrtype_0": (i % 2),
            "aapl15yrtype_1": "500" + i,
            "aapl15yrtype_2": parseInt(Math.random() * 10),
            "aapl15yrtype_3": "Person " + i,
            "aapl15yrtype_4": "test" + i,
            "aapl15yrtype_5": "flex " + i,
            "aapl15yrtype_6": "html " + i,
            "aapl15yrtype_7": "Java " + i,
            "aapl15yrtype_8": "Developer",
            "aapl15yrtype_9": "test@flexious.com",
            "aapl15yrtype_10": "Grid",


            "aapl20yrtype_0": (i % 2),
            "aapl20yrtype_1": "500" + i,
            "aapl20yrtype_2": parseInt(Math.random() * 10),
            "aapl20yrtype_3": "Person " + i,
            "aapl20yrtype_4": "test" + i,
            "aapl20yrtype_5": "flex " + i,
            "aapl20yrtype_6": "html " + i,
            "aapl20yrtype_7": "Java " + i,
            "aapl20yrtype_8": "Developer",
            "aapl20yrtype_9": "test@flexious.com",
            "aapl20yrtype_10": "Grid",


            "aapl25yrtype_0": (i % 2),
            "aapl25yrtype_1": "500" + i,
            "aapl25yrtype_2": parseInt(Math.random() * 10),
            "aapl25yrtype_3": "Person " + i,
            "aapl25yrtype_4": "test" + i,
            "aapl25yrtype_5": "flex " + i,
            "aapl25yrtype_6": "html " + i,
            "aapl25yrtype_7": "Java " + i,
            "aapl25yrtype_8": "Developer",
            "aapl25yrtype_9": "test@flexious.com",
            "aapl25yrtype_10": "Grid",



            "aapl30yrtype_0": (i % 2),
            "aapl30yrtype_1": "500" + i,
            "aapl30yrtype_2": parseInt(Math.random() * 10),
            "aapl30yrtype_3": "Person " + i,
            "aapl30yrtype_4": "test" + i,
            "aapl30yrtype_5": "flex " + i,
            "aapl30yrtype_6": "html " + i,
            "aapl30yrtype_7": "Java " + i,
            "aapl30yrtype_8": "Developer",
            "aapl30yrtype_9": "test@flexious.com",
            "aapl30yrtype_10": "Grid"
        }
    }

    onScrollComplete(evt) {
        evt.grid.invalidateCells();
    }
    refreshCellHandlerFunction(cell) {
        if (!cell.grid._isScrolling) {
            cell.invalidateBackground();
        }
        var col = cell.getColumn();
        var odd = (cell.rowInfo.rowPositionInfo.getRowIndex() % 2 == 0)
        if (col.itemRenderer) {
            if (!cell._renderer) {
                return true;
            } else {
                cell._renderer.setData(cell.rowInfo.getData());
            }
        } else {
            cell.setInnerHTML(cell.rowInfo.getData()[cell.getColumn().getDataField()]);
        }
        return false;
    }
    cellPaintFunction(cell) {
        return !cell.grid._isScrolling;
    }
    onItemClick(evt) {
        evt.grid.domElement.focus();
        if (evt.cell.getRenderer().implementsOrExtends("CheckBoxImageRenderer")) {
            evt.cell.getRenderer().toggle();
        }
        evt.grid.highlightRow(evt.cell, evt.cell.rowInfo, true);
    }
    cellBackgroundColorFunction(cell) {
        if (cell.implementsOrExtends("FlexDataGridColumnGroupCell")) {
            if (cell.getText() == "AAPL 1YR Fixed") {
                return 0x9EE8FF;
            } else if (cell.getText() == "AAPL 2YR Fixed") {
                return 0xFFE563;
            } else if (cell.getText() == "AAPL 3YR Fixed") {
                return 0x9BFFA0;
            } else if (cell.getText() == "AAPL 4YR Fixed") {
                return 0xFF9C6B;
            } else if (cell.getText() == "AAPL 5YR Fixed") {
                return 0x8C9DFF;
            } else if (cell.getText() == "AAPL 10YR Fixed") {
                return 0xFF99FB;
            } else if (cell.getText() == "AAPL 15YR Fixed") {
                return 0xFFE563;
            } else if (cell.getText() == "AAPL 20YR Fixed") {
                return 0x9BFFA0;
            } else if (cell.getText() == "AAPL 25YR Fixed") {
                return 0xFF9C6B;
            } else if (cell.getText() == "AAPL 30YR Fixed") {
                return 0x8C9DFF;
            }
            return null;
        }
        return null;
    }
    getColumnTextColor(cell) {
        if (cell.rowInfo.getData().type_2 > 5) {
            return 0xCC3300;
        }
        return null;
    }
    tabChanged(tab) {
        const grid = this.refs.grid;
        var columnsIndex;
        var index = 1;
        if (tab == "tab_1")
            columnsIndex = [1, 2, 3];
        else if (tab == "tab_2")
            columnsIndex = [4, 5, 6, 7];
        else
            columnsIndex = [8, 9, 10];
        CustomSettingsPopup.buildColumns(grid, grid.getColumnLevel().getLeftLockedColumns(), function (i) {
            return columnsIndex.indexOf(i) >= 0;
        });

        grid.refreshLayout();
        grid.rebuild();
    };
    tradingView_toggle(evt) {
        const grid = this.refs.grid;
        this.tradingView_startTimer(!this.tradingView_running);
        evt.target.value = this.tradingView_running ? "Stop Updates" : "Start Updates";
        if (!this.tradingView_running)
            grid.invalidateCells()
    }
    tradingView_startTimer(checked) {
        if (!this.tradingView_timer) {
            this.tradingView_timer = new Timer(1000.0 / this.tradingView_repeatrate);
            this.tradingView_timer.addEventListener(this, Constants.EVENT_TIMER, this.tradingView_updateTimerHandler);
        }

        if (checked) {
            this.tradingView_timer.start();
            this.tradingView_running = true;
        }
        else {
            this.tradingView_timer.stop();
            this.tradingView_running = false;
        }
    }
    getRandom(minNum, maxNum) {
        return Math.ceil(Math.random() * (maxNum - minNum + 1)) + (minNum - 1);
    }
    tradingView_updateTimerHandler(evt) {
        var grid = this.refs.grid;
        //when this happens, we get a batch from the server that says tickers with XX ids have
        //new values...
        var affectedItems = [];
        //we just randomly update some 25 items out of the 100.
        for (var i = 0; i < 10; i++) {
            var random = myCompanyNameSpace.getRandom(0, 20);

            grid.getDataProvider()[random].type_2 = parseInt(Math.random() * 10);
            grid.getDataProvider()[random].aapl2yrtype_2 = parseInt(Math.random() * 10);
            grid.getDataProvider()[random].aapl3yrtype_2 = parseInt(Math.random() * 10);
            grid.getDataProvider()[random].aapl4yrtype_2 = parseInt(Math.random() * 10);
            grid.getDataProvider()[random].aapl5yrtype_2 = parseInt(Math.random() * 10);
            affectedItems.push(grid.getDataProvider()[random]);
        }

        var random = myCompanyNameSpace.getRandom(1, 2);
        var rowHeight = grid.getRowHeight();
        //now insert 1 records and delete 1  records
        //we add it to the dataprovider, this should not affect the grid. 
        //we are adding at index 0
        if (random == 1) {
            //insert
            var newRowIndex = this.getRandom(0, 10);
            var newStock = this.generateObject(grid.getDataProvider().length);
            grid.getDataProvider().splice(newRowIndex, 0, newStock);
            var rowPos = new RowPositionInfo(
                newStock,//the data object
                newRowIndex, //row index of the data object (0 because we are adding it at the top, you can add it anywhere
                newRowIndex * rowHeight,//vertical position of the data object (rowIndex * rowHeight) assuming no variable row height. Or you could lookup the verticalPos of the item above me, and add his height to that number to get this number
                rowHeight,//same height rows. For variable row height, you can calculate this
                grid.getColumnLevel(), //the top level. If you are adding a child object, you can use the appropriate inner level
                RowPositionInfo.ROW_TYPE_DATA //type of row. For inner level rows, you can add Header, footer, filter, pager ,renderer rows 
            );
            var ivps = grid.getBodyContainer().itemVerticalPositions;
            for (var i = newRowIndex; i < ivps.length; i++) {
                var existingRowPos = ivps[i]
                existingRowPos.setRowIndex(existingRowPos.getRowIndex() + 1);
                existingRowPos.setVerticalPosition(existingRowPos.getVerticalPosition() + rowHeight);//push everything down.
            }
            var rows = grid.getBodyContainer().rows;
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                row.setY(row.rowPositionInfo.getVerticalPosition());
            }

            grid.invalidateCells();
            grid.getBodyContainer().itemVerticalPositions.splice(newRowIndex, 0, rowPos);//add item at index 0.
            grid.getBodyContainer().recycle(grid.getColumnLevel(), false, rowHeight, false);//now make sure the body draws the row
            grid.getBodyContainer().placeComponents();//update the cell positions
        }

        //now the key here is to only update the cells that are affected.
        //this means we navigate to the row, get the affected cell, and invalidate it...
        //we go through the affectedItems, but keep in mind not all of the
        //affectedItems could be in view. So we check to see if anything is
        //drawn and if something is drawn, only then refresh it...
        var items = affectedItems;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            //now there is a function call - getCellByRowColumn on the grid.
            //that will quickly get you the cell to update. but in this case
            //since we are updating multiple cells in each row, we will just
            //get the row to update and use its cells collection to quickly
            //update them
            var rows = fdg.getBodyContainer().rows;
            for (var j = 0; j < rows.length; j++) {
                var row = rows[j];
                if (row.getData() == item) {
                    //this means we need to update his cells
                    for (var k = 0; k < row.cells.length; k++) {
                        var cell = row.cells[k];
                        var cellComp = cell.component;
                        if (cellComp) {
                            cellComp.invalidateBackground();
                            cellComp.refreshCell();
                        }
                    }
                }
            }
        }
    }

    handleChange(newValue) {
        const grid = this.refs.grid;
        var columnsIndex;
        var index = 1;
        if (newValue == 1)
            columnsIndex = [1, 2, 3];
        else if (newValue == 2)
            columnsIndex = [4, 5, 6, 7];
        else
            columnsIndex = [8, 9, 10];
        CustomSettingsPopup.buildColumns(grid, grid.getColumnLevel().getLeftLockedColumns(), function (i) {
            return columnsIndex.indexOf(i) >= 0;
        });

        grid.refreshLayout();
        grid.rebuild();
    }

    render() {
        return (
            <div>
                <h4>Welcome!</h4>
                <img
                    alt='This is a duck, because Redux!'
                    className='duck'
                    src={DuckImage} />
                <Tabs id="selectColumnGroup" value={0} onChange={this.handleChange.bind(this)}>
                    <Tab label="Cols 1-3" value={1} />
                    <Tab label="Cols 4-7" value={2} />
                    <Tab label="Cols 8-10" value={3} />
                </Tabs>

                <ReactDataGrid ref="grid" selectionMode="multipleRows" enableStickyControlKeySelection={false} enableEnterLikeTab destroyEditorOnMouseDownOnGrid={false}
                    itemClick="onItemClick" enableKeyboardNavigation popupFactorySettingsPopup={new ClassFactory(CustomSettingsPopup)} width="100%"
                    cellBackgroundColorFunction={this.cellBackgroundColorFunction} editable enableActiveCellHighlight enablePrint
                    enablePreferencePersistence horizontalScrollPolicy="auto" enableExport forcePagerRow pageSize="1000" enableFilters enableFooters >
                    <ReactDataGridColumn columnLockMode="left" dataField="investor" editable={false} headerText="Investor" headerAlign="center" filterControl="TextInput"
                        cellTextColorFunction={this.getColumnTextColor} width="200" />
                    <ReactDataGridColumn columnLockMode="left" dataField="salesPerson" editable={false} headerText="Sales Person" headerAlign="center"
                        filterControl="TextInput" width="200" />
                    <ReactDataGridColumn columnLockMode="left" dataField="desk" headerText="Desk" editable={false} footerOperation="count" headerAlign="center"
                        filterControl="ComboBox" filterComboBoxBuildFromGrid={false} filterComboBoxDataProvider={this.allDepartments} width="200" />
                </ReactDataGrid>
            </div>
        );
    }
}
HomeView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};