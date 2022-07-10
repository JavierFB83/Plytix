/// <reference types="cypress" />

import { todoHOMEPage } from "../pageobject/todo-homepage";

describe('Testing TODO',() => {
    const TodohomePage = new todoHOMEPage()

beforeEach(() =>{
    TodohomePage.gotohomepage()
    })

it ("Add 1 task", () =>{
    TodohomePage.add1homework("Item 1")
    TodohomePage.Checklabel("Item 1")
    })

it ("Filter by complete task with only 1 task active", () =>{
    TodohomePage.add1homework("Item 1")
    TodohomePage.Filterbycompletedtask()
    TodohomePage.Nolabel()
    TodohomePage.Taskleft("1 item left")
    })

it ("Mark complete task and filter by complete task", ()=>{
    TodohomePage.add1homework("Item 1")
    TodohomePage.Markcompleted()
    TodohomePage.Filterbycompletedtask()
    TodohomePage.Checklabel("Item 1")
    })

 it("Clear complete task with only 1 task complete", ()=>{
    TodohomePage.add1homework("Item 1")
    TodohomePage.Markcompleted()
    TodohomePage.Filterbycompletedtask()
    TodohomePage.Clearcompleted()
    TodohomePage.Nolabel ()
    })

it ("Add 3 task", () =>{
    TodohomePage.add1homework("Item 1")
    TodohomePage.add1homework("Item 2")
    TodohomePage.add1homework("Item 3")
    TodohomePage.Labelnumber("3")
    TodohomePage.Taskleft("3 items left")
    })

    it ("Filter by Active with 1 complete and 2 active", ()=>{
    TodohomePage.add1homework("Item 1")
    TodohomePage.add1homework("Item 2")
    TodohomePage.add1homework("Item 3")
    TodohomePage.Markcompleted3()
    TodohomePage.FilterbyActivetask()
    TodohomePage.Labelnumber(2)


    })
})
