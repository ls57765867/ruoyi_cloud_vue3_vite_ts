import request from '@/utils/request'

// 查询定时任务调度列表
export function listJob(query: any) {
  return request({
    url: '/schedule/job/list',
    method: 'get',
    params: query
  })
}

// 查询定时任务调度详细
export function getJob(jobId: any) {
  return request({
    url: '/schedule/job/' + jobId,
    method: 'get'
  })
}

// 新增定时任务调度
export function addJob(data: any) {
  return request({
    url: '/schedule/job',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function updateJob(data: any) {
  return request({
    url: '/schedule/job',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度
export function delJob(jobId: any) {
  return request({
    url: '/schedule/job/' + jobId,
    method: 'delete'
  })
}

// 任务状态修改
export function changeJobStatus(jobId: any, status: any) {
  const data = {
    jobId,
    status
  }
  return request({
    url: '/schedule/job/changeStatus',
    method: 'put',
    data: data
  })
}

// 定时任务立即执行一次
export function runJob(jobId: any, jobGroup: any) {
  const data = {
    jobId,
    jobGroup
  }
  return request({
    url: '/schedule/job/run',
    method: 'put',
    data: data
  })
}
